CREATE TABLE `booking` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `address` VARCHAR(45) NOT NULL,
  `city` VARCHAR(45) NOT NULL,
  `state` VARCHAR(45) NOT NULL,
  `zipcode` VARCHAR(45) NOT NULL,
  `type` ENUM('HOUSEKEEPING', 'DOG_WALK') NOT NULL,
  `date` DATETIME NOT NULL,
  PRIMARY KEY (`id`));

-- seed data
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("jon@daily.show", "Jon Stewart", "5323 Levander Loop", "Austin", "TX", "78702", "HOUSEKEEPING", "2019-06-05 14:00:00");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("stephen@daily.show", "Stephen Colbert", "201 Congress Ave", "Austin", "TX", "78701", "DOG_WALK", "2019-06-07 20:00:00");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("trevor@daily.show", "Trevor Noah", "1200 Brazos St", "Austin", "TX", "78701", "HOUSEKEEPING", "2019-06-12 16:00:00");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Dolly_Gleichner7@hotmail.com", "Dolly Gleichner", "9716 Rachelle Light", "East Novaville", "IN", "52518", "HOUSEKEEPING", "2019-12-15 16:18:58");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Vincenza.Mueller@gmail.com", "Vincenza Mueller", "587 Volkman Skyway", "New Ashley", "NY", "10055", "HOUSEKEEPING", "2019-11-13 01:19:04");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Angel33@yahoo.com", "Angel Gislason", "27969 Tito Lock", "New Kraig", "OH", "21422", "DOG_WALK", "2019-10-19 00:25:16");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Tatum99@hotmail.com", "Tatum Hane", "499 Wolf Station", "South Yesseniaberg", "NM", "53716", "HOUSEKEEPING", "2019-10-17 02:29:56");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Kara_Weber@hotmail.com", "Kara Weber", "455 Koelpin Unions", "Sporerberg", "AR", "99357", "HOUSEKEEPING", "2019-12-13 09:15:08");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Lionel90@yahoo.com", "Lionel Romaguera", "252 Bethel Grove", "Mertzshire", "MD", "81506", "HOUSEKEEPING", "2019-08-05 15:41:35");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Elwin.Kovacek35@hotmail.com", "Elwin Kovacek", "59704 Pinkie Freeway", "Linwoodberg", "PA", "49940", "DOG_WALK", "2019-12-22 02:47:53");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Eliseo27@hotmail.com", "Eliseo Abernathy", "260 Tromp Row", "Stoltenberghaven", "CT", "24812", "DOG_WALK", "2019-08-18 20:28:27");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Quentin98@hotmail.com", "Quentin McCullough", "6105 Hilpert Creek", "East Joaniemouth", "AL", "93247", "DOG_WALK", "2019-12-21 01:07:53");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Roslyn4@hotmail.com", "Roslyn Larkin", "08535 Rita Heights", "Port Billview", "OH", "26241", "HOUSEKEEPING", "2019-11-29 04:41:24");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Josefa_Buckridge@yahoo.com", "Josefa Buckridge", "430 DuBuque Cove", "Lake Jarvishaven", "IA", "69234", "HOUSEKEEPING", "2019-12-13 01:52:06");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Lonnie.Wuckert@yahoo.com", "Lonnie Wuckert", "180 White Ways", "East Marcella", "AL", "45527", "HOUSEKEEPING", "2019-10-01 14:33:56");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Tomas48@hotmail.com", "Tomas Smith", "5358 Kohler Crest", "Narcisobury", "ND", "68683", "HOUSEKEEPING", "2019-11-19 11:40:37");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Jennifer85@hotmail.com", "Jennifer Nader", "857 Mohr Plains", "South Patriciastad", "AK", "90144", "DOG_WALK", "2019-12-08 21:47:52");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Kaylie_Wiza@yahoo.com", "Kaylie Wiza", "73144 Meda Forge", "Jerroldborough", "KS", "79290", "HOUSEKEEPING", "2019-08-05 06:44:31");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Jeanne.Stehr12@yahoo.com", "Jeanne Stehr", "37097 Carlo Station", "Gutmannside", "NM", "55129", "DOG_WALK", "2019-11-08 15:33:55");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Bailey.Ritchie@yahoo.com", "Bailey Ritchie", "75855 Hickle Cove", "Carissaland", "ID", "17244", "DOG_WALK", "2019-09-03 01:29:24");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Liliane98@yahoo.com", "Liliane Mann", "8158 Spinka Loaf", "Ethelynborough", "WV", "29446", "HOUSEKEEPING", "2019-12-14 18:44:16");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Hoyt_Lebsack@yahoo.com", "Hoyt Lebsack", "493 Kiehn Circles", "West Ed", "CO", "38206", "DOG_WALK", "2019-10-18 00:13:05");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Caroline_Miller50@hotmail.com", "Caroline Miller", "27959 Kim Road", "Schuppemouth", "IN", "02314", "DOG_WALK", "2019-08-20 13:08:03");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Lenore76@gmail.com", "Lenore Swaniawski", "96403 Lubowitz Haven", "Lempistad", "TN", "05016", "HOUSEKEEPING", "2019-10-20 14:29:04");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Janie_Powlowski33@yahoo.com", "Janie Powlowski", "03985 Tatum Wells", "Vandervorthaven", "VA", "86934", "HOUSEKEEPING", "2019-11-11 00:31:27");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Joseph1@yahoo.com", "Joseph Haley", "157 Sauer Square", "East Doylehaven", "OH", "91917", "DOG_WALK", "2019-08-21 07:51:08");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Janiya.Gleichner84@gmail.com", "Janiya Gleichner", "62392 Ryan Squares", "Garfieldmouth", "NJ", "34786", "DOG_WALK", "2019-08-20 05:25:51");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Sherman.Botsford@yahoo.com", "Sherman Botsford", "991 Quigley Freeway", "West Jerrodfurt", "CA", "12118", "HOUSEKEEPING", "2019-10-08 03:14:44");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Flavio.Legros95@gmail.com", "Flavio Legros", "46862 Becker Forest", "Lake Katlynnfort", "FL", "52772", "DOG_WALK", "2019-10-02 04:37:21");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Carolyn.McClure83@hotmail.com", "Carolyn McClure", "557 Maryam View", "Kubshire", "MD", "89378", "HOUSEKEEPING", "2019-08-26 04:24:18");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Forrest.Ortiz@gmail.com", "Forrest Ortiz", "1700 Arthur Streets", "West Otisside", "MO", "80994", "DOG_WALK", "2019-08-07 12:14:13");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Odell_Stokes@hotmail.com", "Odell Stokes", "863 Yasmeen Station", "East Jamaalburgh", "MA", "09684", "HOUSEKEEPING", "2019-09-25 03:20:30");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Helga21@hotmail.com", "Helga Smitham", "4041 Juliana Turnpike", "Brauliomouth", "FL", "25662", "DOG_WALK", "2019-11-12 08:02:49");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Breana.Toy@gmail.com", "Breana Toy", "388 Davis Freeway", "West Sedrick", "IA", "84676", "DOG_WALK", "2019-12-21 10:29:35");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Salvatore.Wiza41@yahoo.com", "Salvatore Wiza", "02547 Waylon Path", "South Kaelabury", "WV", "98456", "DOG_WALK", "2019-10-29 07:11:26");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Barbara_Beatty94@gmail.com", "Barbara Beatty", "19529 Troy Bridge", "Lake Wardmouth", "AR", "17205", "DOG_WALK", "2019-10-19 01:22:01");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Estelle97@yahoo.com", "Estelle Kutch", "919 Abagail Circles", "Effertzside", "AZ", "84674", "DOG_WALK", "2019-10-23 10:14:32");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Emmanuelle_Rolfson19@hotmail.com", "Emmanuelle Rolfson", "23847 Boehm Loop", "West Kavon", "NH", "64390", "DOG_WALK", "2019-12-13 19:28:35");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Ozella37@yahoo.com", "Ozella Wilderman", "0398 Altenwerth Manor", "Hayliemouth", "IL", "14705", "DOG_WALK", "2019-10-21 13:06:20");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Kathryne93@hotmail.com", "Kathryne Kuhn", "9120 Wilkinson Ford", "Maxhaven", "LA", "01210", "DOG_WALK", "2019-10-09 01:38:00");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Hershel_Heller@hotmail.com", "Hershel Heller", "496 Donnelly Crossroad", "Boscomouth", "NY", "21116", "DOG_WALK", "2019-12-26 20:07:51");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Ramona59@yahoo.com", "Ramona Kuhic", "5176 Klein Shoals", "Braunport", "ID", "35575", "HOUSEKEEPING", "2019-08-14 03:59:42");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Fredrick89@hotmail.com", "Fredrick Cremin", "535 Collier Via", "Michaelville", "MO", "50535", "DOG_WALK", "2019-08-22 10:46:22");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Gerardo.Boyle86@gmail.com", "Gerardo Boyle", "131 Ratke Trail", "Lake Andyfort", "OH", "31895", "HOUSEKEEPING", "2019-08-29 18:11:39");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Vergie.Baumbach8@yahoo.com", "Vergie Baumbach", "4961 Ward Common", "Wardtown", "AK", "05154", "DOG_WALK", "2019-08-15 02:57:51");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("America35@hotmail.com", "America Ebert", "103 Rogahn Shore", "Bartolettiburgh", "AR", "39658", "HOUSEKEEPING", "2019-09-25 04:44:28");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Favian.Hamill47@yahoo.com", "Favian Hamill", "7217 Bosco Land", "North Hollie", "WI", "86656", "HOUSEKEEPING", "2019-12-11 07:29:40");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Cielo_Mosciski@hotmail.com", "Cielo Mosciski", "9854 Connelly Harbors", "Ernestfurt", "NM", "02455", "HOUSEKEEPING", "2019-10-07 02:19:25");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Letha_Goldner@yahoo.com", "Letha Goldner", "2406 Berge Trace", "Jeaniechester", "WA", "75591", "HOUSEKEEPING", "2019-11-21 04:56:14");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Estell_Bednar53@yahoo.com", "Estell Bednar", "23746 Baumbach Isle", "Lilianville", "AK", "53534", "HOUSEKEEPING", "2019-11-17 06:07:27");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Bradley_Quigley51@hotmail.com", "Bradley Quigley", "21595 Maxie Field", "South Erling", "OH", "85106", "DOG_WALK", "2019-12-05 03:29:12");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Zena.Mayert@yahoo.com", "Zena Mayert", "944 Sonny Stream", "Malindaview", "NE", "72509", "DOG_WALK", "2019-08-18 11:52:53");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Talon_McLaughlin@gmail.com", "Talon McLaughlin", "326 Green Dale", "Leonormouth", "MA", "81684", "HOUSEKEEPING", "2019-11-04 09:54:26");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Austin_Zieme@gmail.com", "Austin Zieme", "26564 August Brooks", "North Patrick", "CT", "61783", "DOG_WALK", "2019-12-29 23:48:59");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Etha_Bernhard39@hotmail.com", "Etha Bernhard", "45740 Lilian Plains", "Vernatown", "HI", "63966", "HOUSEKEEPING", "2019-12-09 04:30:05");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Erich.Emmerich59@yahoo.com", "Erich Emmerich", "89990 Oren Pine", "Vaughnport", "KS", "44648", "DOG_WALK", "2019-08-26 06:51:02");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Cordie46@gmail.com", "Cordie Kertzmann", "743 Ian Ridges", "West Curt", "VA", "71135", "HOUSEKEEPING", "2019-12-07 04:06:25");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Estelle.Marvin@gmail.com", "Estelle Marvin", "0326 Jamar Common", "South Bethel", "WY", "47506", "DOG_WALK", "2019-11-09 19:20:33");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Cornell.Okuneva@hotmail.com", "Cornell Okuneva", "54427 MacGyver Falls", "Lake Johnathon", "TN", "75147", "DOG_WALK", "2019-09-30 03:32:24");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Durward.Bartoletti@yahoo.com", "Durward Bartoletti", "7563 Teresa Ridges", "West Frida", "MN", "73566", "DOG_WALK", "2019-08-02 01:06:19");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Amari.OKeefe53@gmail.com", "Amari O'Keefe", "27064 Princess Mall", "Robeltown", "NH", "23286", "HOUSEKEEPING", "2019-12-19 15:29:52");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Randal.Mann81@hotmail.com", "Randal Mann", "369 Carroll Ford", "Serenityfort", "OH", "70706", "DOG_WALK", "2019-10-26 07:03:12");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Karen45@yahoo.com", "Karen Swift", "1586 Kuhlman Lights", "Kaileemouth", "VT", "71853", "HOUSEKEEPING", "2019-08-04 05:52:48");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Lou_Hoeger35@yahoo.com", "Lou Hoeger", "721 Marion Squares", "Hanefurt", "GA", "26750", "DOG_WALK", "2019-12-01 10:24:42");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Fernando40@yahoo.com", "Fernando Rogahn", "43681 Quinton Village", "Mooreview", "ND", "98898", "HOUSEKEEPING", "2019-11-11 03:45:12");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Ivah_Thiel@gmail.com", "Ivah Thiel", "633 Mitchell Glen", "Walkerhaven", "SC", "26133", "DOG_WALK", "2019-09-02 03:36:49");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Domenic_King@hotmail.com", "Domenic King", "04828 Gibson Corner", "Bechtelarmouth", "IL", "01288", "DOG_WALK", "2019-10-21 08:36:17");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Raphaelle8@gmail.com", "Raphaelle Feest", "352 Edwina Lakes", "North Erinfort", "AK", "12996", "DOG_WALK", "2019-08-11 00:30:05");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Xzavier95@gmail.com", "Xzavier Kshlerin", "286 Schamberger Pines", "Margaretteport", "WY", "70164", "HOUSEKEEPING", "2019-10-26 09:58:41");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Cathy93@gmail.com", "Cathy Torphy", "2511 Hettinger Springs", "Lake Santa", "NM", "08528", "HOUSEKEEPING", "2019-08-22 23:02:41");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Ambrose49@gmail.com", "Ambrose Runolfsson", "630 Karina Coves", "Lake Kiarrahaven", "NC", "92435", "DOG_WALK", "2019-12-17 17:02:08");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Broderick_Boehm@gmail.com", "Broderick Boehm", "42942 Mylene Ramp", "North Jaycefurt", "OH", "25308", "DOG_WALK", "2019-12-28 14:34:18");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Brendon4@yahoo.com", "Brendon Schinner", "87948 Joshuah Islands", "East Trever", "LA", "74792", "DOG_WALK", "2019-11-28 08:35:20");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Florida86@gmail.com", "Florida Bergnaum", "750 Romaine Dale", "Nadiatown", "UT", "32863", "DOG_WALK", "2019-10-01 03:05:32");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Neil.Brekke61@hotmail.com", "Neil Brekke", "170 Cronin Mall", "Leonardoport", "AR", "35412", "DOG_WALK", "2019-08-21 02:52:42");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Leonardo.Kozey@yahoo.com", "Leonardo Kozey", "418 Rogelio Union", "New Ronaldoside", "TX", "10534", "HOUSEKEEPING", "2019-12-01 07:04:30");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Bailee.Rowe99@gmail.com", "Bailee Rowe", "47323 Schoen Mountains", "Cristville", "DE", "67696", "HOUSEKEEPING", "2019-12-12 05:53:40");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Walker31@hotmail.com", "Walker Grimes", "73119 Dewayne Ways", "North Virgil", "NH", "00046", "DOG_WALK", "2019-08-13 05:47:50");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Claudine.Cummerata22@gmail.com", "Claudine Cummerata", "5420 Ed Via", "Port Melvina", "WI", "47242", "HOUSEKEEPING", "2019-08-28 00:42:21");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Janet56@yahoo.com", "Janet Jenkins", "0497 Waters Ranch", "South Leobury", "NM", "12299", "DOG_WALK", "2019-10-17 09:50:47");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Delphia.Ernser31@yahoo.com", "Delphia Ernser", "10782 Odessa Station", "Hahnborough", "OR", "21209", "DOG_WALK", "2019-12-20 01:57:06");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Gabriella8@hotmail.com", "Gabriella O'Connell", "407 Jamarcus Pike", "Lake Colt", "OH", "56763", "HOUSEKEEPING", "2019-09-05 15:03:01");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Dina64@hotmail.com", "Dina Kunde", "8058 Erdman Drive", "Madysonton", "GA", "73674", "DOG_WALK", "2019-09-24 15:54:31");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Pasquale.Krajcik@yahoo.com", "Pasquale Krajcik", "660 Dickinson Road", "South Altaview", "WY", "92995", "HOUSEKEEPING", "2019-10-15 01:33:33");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Cleta74@yahoo.com", "Cleta Watsica", "459 Austyn Harbors", "Lake Dillonbury", "MO", "69309", "HOUSEKEEPING", "2019-12-18 04:50:18");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Zoila92@gmail.com", "Zoila Denesik", "812 Bruen Course", "New Aditya", "ME", "91826", "HOUSEKEEPING", "2019-11-22 21:52:51");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Jamal.Feest@gmail.com", "Jamal Feest", "17589 Steuber Mountains", "New Eldora", "MS", "29026", "HOUSEKEEPING", "2019-08-03 00:40:30");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Charles_Schneider69@yahoo.com", "Charles Schneider", "318 Upton Extension", "Oralland", "WA", "11251", "HOUSEKEEPING", "2019-12-07 01:41:22");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Lesley27@gmail.com", "Lesley Dietrich", "3343 Thomas Isle", "Bertramfort", "LA", "54431", "DOG_WALK", "2019-09-07 01:21:32");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Clemmie72@hotmail.com", "Clemmie Glover", "507 Cummings Center", "North Ladarius", "KS", "44851", "HOUSEKEEPING", "2019-10-23 03:14:54");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Conner92@yahoo.com", "Conner Wunsch", "576 Kohler Plains", "East Darrionview", "TN", "95872", "HOUSEKEEPING", "2019-08-30 09:08:03");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Melody65@yahoo.com", "Melody Nicolas", "70854 Anita Freeway", "Samside", "MT", "45540", "HOUSEKEEPING", "2019-08-29 08:11:03");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Karolann.Morar98@gmail.com", "Karolann Morar", "4094 Ryan Well", "Feilberg", "TN", "29405", "DOG_WALK", "2019-11-18 03:24:39");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Liam_Reynolds56@gmail.com", "Liam Reynolds", "0967 Scot Rapids", "Luciusview", "ID", "51741", "HOUSEKEEPING", "2019-09-15 22:56:02");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Rogelio.Williamson53@gmail.com", "Rogelio Williamson", "46483 Homenick Passage", "Einarport", "DE", "49067", "HOUSEKEEPING", "2019-11-16 01:53:45");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Ena.Lehner@gmail.com", "Ena Lehner", "961 Nathaniel Meadow", "North Kamronview", "ID", "76116", "HOUSEKEEPING", "2019-08-07 01:03:48");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Doyle.Feil@yahoo.com", "Doyle Feil", "578 Padberg Mills", "South Anna", "CT", "64111", "HOUSEKEEPING", "2019-08-07 02:53:06");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Braxton.Lemke@yahoo.com", "Braxton Lemke", "8958 Emmerich Glens", "Ellenstad", "MD", "52931", "DOG_WALK", "2019-10-01 21:32:32");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Doris_Armstrong1@hotmail.com", "Doris Armstrong", "2745 Ayla Street", "Port Landen", "CA", "00231", "DOG_WALK", "2019-10-29 03:50:15");
INSERT INTO booking (email, name, address, city, state, zipcode, type, date) VALUES("Lucienne.Hills79@yahoo.com", "Lucienne Hills", "90411 Citlalli Shores", "Kilbackton", "MT", "56969", "HOUSEKEEPING", "2019-10-23 18:15:15");