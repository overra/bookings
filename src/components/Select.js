import React from "react";
import { Field, ErrorMessage } from "formik";
import styled from "styled-components";
import FieldWrapper from "./FieldWrapper";
import FieldLabel from "./FieldLabel";
import ErrorContainer from "./ErrorContainer";
import usePrevious from "../hooks/usePrevious";

export default Select;

function Select({
  name,
  label,
  options = [],
  onChange,
  gutterBottom,
  horizontalLabel,
  ...props
}) {
  const [state, setState] = React.useState({
    showMenu: false,
    selectedIndex: -1
  });
  const { showMenu, selectedIndex } = state;
  const prevState = usePrevious(state);
  const selectWrapperRef = React.useRef();
  const buttonRef = React.useRef();
  const menuRef = React.useRef();
  const optionRefs = React.useRef(options.map(() => React.createRef()));

  const handleClickAway = React.useCallback(
    function handleClickAway(event) {
      if (
        selectWrapperRef.current &&
        !selectWrapperRef.current.contains(event.target)
      ) {
        setShowOptions(false);
      }
    },
    [selectWrapperRef]
  );

  /* setup and cleanup click event handler to close select menu when clicking away */
  React.useEffect(() => {
    if (showMenu) {
      window.addEventListener("click", handleClickAway);
    } else {
      window.removeEventListener("click", handleClickAway);
    }
    return () => {
      window.removeEventListener("click", handleClickAway);
    };
  }, [showMenu, handleClickAway]);

  /* handle changing focus when the state changes */
  React.useEffect(() => {
    if (showMenu && !prevState.showMenu) {
      if (selectedIndex !== -1) {
        optionRefs.current[selectedIndex].current.focus();
      } else {
        menuRef.current.focus();
      }
    } else if (!showMenu && prevState.showMenu) {
      buttonRef.current.focus();
    } else if (selectedIndex !== prevState.selectedIndex) {
      if (selectedIndex === -1) {
        menuRef.current.focus();
      } else {
        optionRefs.current[selectedIndex].current.focus();
      }
    }
  }, [selectedIndex, showMenu, prevState]);

  return (
    <FieldWrapper ref={selectWrapperRef} {...{ gutterBottom, horizontalLabel }}>
      <FieldLabel htmlFor={name}>{label}</FieldLabel>
      <Field name={name} render={renderSelect} />
      <ErrorContainer>
        <ErrorMessage name={name} />
      </ErrorContainer>
    </FieldWrapper>
  );

  function renderSelect({ field, form }) {
    const currentValueOption = options.find(
      option => option.value === field.value
    );

    let menuPositionStyle = {};
    if (buttonRef.current) {
      const rect = buttonRef.current.getClientRects()[0];
      if (rect) {
        /* support ie11 */
        const top = rect.top || rect.y;
        const left = rect.left || rect.x;

        /* set menu dimensions and position relative to the menu button */
        menuPositionStyle = {
          top: window.pageYOffset + top + rect.height,
          left: left,
          width: rect.width
        };
        /* position the menu above the menu button if positioning it below causes
           the page height to increase */
        if (
          menuPositionStyle.top + menuRef.current.scrollHeight >
          window.outerHeight
        ) {
          menuPositionStyle.top =
            window.pageYOffset + top - menuRef.current.scrollHeight;
        }
      }
    }
    return (
      <>
        <StyledSelect
          ref={buttonRef}
          type="button"
          aria-haspopup="menu"
          aria-expanded={showMenu}
          onKeyDown={handleButtonKeyDown(field.value)}
          onClick={handleShowMenu}
          {...props}
          onBlur={() => {
            form.setFieldTouched(field.name);
            field.onBlur();
          }}
        >
          {currentValueOption ? currentValueOption.label : <>&nbsp;</>}
        </StyledSelect>
        <Menu
          ref={menuRef}
          onKeyDown={handleOptionsKeyDown}
          show={showMenu}
          style={menuPositionStyle}
          role="menu"
        >
          {options.map((option, index) => (
            <MenuItem
              ref={optionRefs.current[index]}
              key={option.value}
              role="menuitem"
              tabIndex="-1"
              selected={selectedIndex === index}
              onClick={handleSelectOption(index, field, form)}
              onKeyDown={handleOptionKeyDown(index, field, form)}
            >
              {option.label}
            </MenuItem>
          ))}
        </Menu>
      </>
    );
  }

  function setShowOptions(showMenu) {
    setState(state => ({ ...state, showMenu }));
  }

  function openAtCurrentItem(value) {
    let index = 0;
    if (value) {
      index = options.findIndex(option => option.value === value);
    }

    setState({ showMenu: true, selectedIndex: index });
  }

  function handleButtonKeyDown(currentValue) {
    return function(event) {
      if (event.key === "ArrowUp" || event.key === "ArrowDown") {
        event.preventDefault();
        openAtCurrentItem(currentValue);
      }
    };
  }

  function handleOptionsKeyDown(event) {
    if (event.key === "Escape") {
      /* close select menu and stop event from propagating up the dom tree to
         prevent closing modals */
      event.preventDefault();
      event.stopPropagation();
      setState({ showMenu: false, selectedIndex: -1 });
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      let nextIndex = selectedIndex + 1;
      if (nextIndex !== options.length) {
        setState(state => ({ ...state, selectedIndex: nextIndex }));
      }
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      let nextIndex = selectedIndex - 1;
      if (nextIndex !== -1) {
        setState(state => ({ ...state, selectedIndex: nextIndex }));
      }
    } else if (event.key === "Tab") {
      event.preventDefault();
    }
  }

  function handleOptionKeyDown(index, field, form) {
    return function(event) {
      if (event.key === "Enter") {
        event.preventDefault();
        setState({ showMenu: false, selectedIndex: -1 });
        handleChange(form, field.name, options[index].value);
      }
    };
  }

  function handleShowMenu() {
    setShowOptions(true);
  }

  function handleSelectOption(index, field, form) {
    return () => {
      handleChange(form, field.name, options[index].value);
      setShowOptions(false);
    };
  }

  function handleChange(form, fieldName, value) {
    form.setFieldValue(fieldName, value);
    if (typeof onChange === "function") {
      onChange(value);
    }
  }
}

const StyledSelect = styled.button`
  box-sizing: border-box;
  padding: 8px 8px;
  width: 100%;
  background-color: #fff;
  background-image: url("/arrows.svg");
  background-position: calc(100% - 8px) center;
  background-repeat: no-repeat;
  border: 1px #ccc solid;
  border-radius: 2px;
  cursor: pointer;
  font-size: 12pt;
  text-align: left;
`;

const Menu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: #fff;
  border: 1px #ccc solid;
  border-radius: 2px;
  font-size: 12pt;
  ${props =>
    props.show
      ? ""
      : `
        height: 0; 
        overflow: hidden; 
        border: 0;
  `}
`;

const MenuItem = styled.div`
  padding: 8px;
  cursor: pointer;
  background-color: ${props => (props.selected ? "#dedede" : "#fff")};
  &:hover {
    background-color: #f0f0f0;
  }
`;
