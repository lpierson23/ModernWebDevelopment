CREATE TABLE `users` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `email_verified` boolean,
  `created_at` timestamp,
  `updated_at` timestamp,
  `username` varchar(255),
  `email` varchar(255),
  `password` varchar(255)
);

CREATE TABLE `calendar` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `created_at` timestamp,
  `updated_at` timestamp,
  `planned_date` date,
  `meal` int,
  `user` int
);

CREATE TABLE `meals` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `created_at` timestamp,
  `updated_at` timestamp,
  `name` varchar(255),
  `servings` int,
  `recipe` varchar(255),
  `user` int
);

CREATE TABLE `groceries` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `created_at` timestamp,
  `updated_at` timestamp,
  `name` varchar(255),
  `quantity` int,
  `user` int
);

ALTER TABLE `calendar` ADD FOREIGN KEY (`user`) REFERENCES `users` (`id`);

ALTER TABLE `meals` ADD FOREIGN KEY (`id`) REFERENCES `calendar` (`meal`);

ALTER TABLE `meals` ADD FOREIGN KEY (`user`) REFERENCES `users` (`id`);

ALTER TABLE `groceries` ADD FOREIGN KEY (`user`) REFERENCES `users` (`id`);
