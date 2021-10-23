-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 23, 2021 at 07:45 AM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cric_api`
--

-- --------------------------------------------------------

--
-- Table structure for table `adonis_schema`
--

CREATE TABLE `adonis_schema` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL,
  `migration_time` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `adonis_schema`
--

INSERT INTO `adonis_schema` (`id`, `name`, `batch`, `migration_time`) VALUES
(1, 'database\\migrations\\1634815291178_users', 1, '2021-10-22 08:37:52'),
(5, 'database\\migrations\\1634815986369_overs', 2, '2021-10-23 03:47:38'),
(6, 'database\\migrations\\1634816926600_balls', 2, '2021-10-23 03:47:39');

-- --------------------------------------------------------

--
-- Table structure for table `balls`
--

CREATE TABLE `balls` (
  `id` int(10) UNSIGNED NOT NULL,
  `over_id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `bowler_id` int(10) UNSIGNED NOT NULL,
  `run` int(11) NOT NULL,
  `extra` int(11) DEFAULT NULL,
  `speed` float(8,2) NOT NULL,
  `run_type` varchar(191) DEFAULT NULL,
  `ball_type` varchar(191) NOT NULL,
  `boundary` int(11) DEFAULT NULL,
  `out_type` varchar(191) DEFAULT NULL,
  `halper_id` int(10) UNSIGNED DEFAULT NULL,
  `out_player_id` int(10) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `balls`
--

INSERT INTO `balls` (`id`, `over_id`, `user_id`, `bowler_id`, `run`, `extra`, `speed`, `run_type`, `ball_type`, `boundary`, `out_type`, `halper_id`, `out_player_id`, `created_at`, `updated_at`) VALUES
(2, 1, 1, 2, 3, 1, 50.00, 'Running', 'Right', 0, 'Not-Out', NULL, NULL, '2021-10-23 03:58:32', '2021-10-23 03:58:32'),
(3, 1, 1, 2, 4, 1, 100.00, 'Boundary', 'Right', 0, 'Not-Out', NULL, NULL, '2021-10-23 03:59:44', '2021-10-23 03:59:44'),
(4, 1, 1, 2, 6, 1, 100.00, 'Boundary', 'Right', 0, 'Not-Out', NULL, NULL, '2021-10-23 04:01:05', '2021-10-23 04:01:05'),
(5, 1, 1, 2, 0, 0, 120.00, 'No-Run', 'Right', 0, 'Stamping', 1, 1, '2021-10-23 04:02:32', '2021-10-23 04:02:32'),
(6, 1, 1, 2, 0, 0, 120.00, 'No-Run', 'Right', 0, 'LBW', NULL, NULL, '2021-10-23 04:29:25', '2021-10-23 04:29:25');

-- --------------------------------------------------------

--
-- Table structure for table `overs`
--

CREATE TABLE `overs` (
  `id` int(10) UNSIGNED NOT NULL,
  `over_number` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `overs`
--

INSERT INTO `overs` (`id`, `over_number`, `created_at`, `updated_at`) VALUES
(1, 1, '2021-10-23 03:51:31', '2021-10-23 03:51:31'),
(2, 2, '2021-10-23 03:51:41', '2021-10-23 03:51:41');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `sure_name` varchar(191) NOT NULL,
  `middle_name` varchar(191) NOT NULL,
  `last_name` varchar(191) NOT NULL,
  `player_type` varchar(191) NOT NULL,
  `idcard` varchar(191) NOT NULL,
  `play_role` varchar(191) NOT NULL,
  `batting_style` varchar(191) NOT NULL,
  `bowling_style` varchar(191) NOT NULL,
  `address` text NOT NULL,
  `dob` text NOT NULL,
  `hight` varchar(191) NOT NULL,
  `weight` float(191,2) NOT NULL,
  `gender` varchar(191) NOT NULL,
  `hair_style` varchar(191) NOT NULL,
  `password` varchar(191) NOT NULL,
  `email` varchar(191) NOT NULL,
  `phone` varchar(191) NOT NULL,
  `country` varchar(191) NOT NULL,
  `city` varchar(191) NOT NULL,
  `pic` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `sure_name`, `middle_name`, `last_name`, `player_type`, `idcard`, `play_role`, `batting_style`, `bowling_style`, `address`, `dob`, `hight`, `weight`, `gender`, `hair_style`, `password`, `email`, `phone`, `country`, `city`, `pic`, `created_at`, `updated_at`) VALUES
(1, 'Kashem', 'Bhowmik', 'Nothing', 'Player', '12345678', 'Batsman', 'RHB', 'RHB', 'Sylhet', '31-10-1998', '6 feet', 60.00, 'Male', 'Black Normal', '$argon2id$v=19$t=3,m=4096,p=1$SPM4tg4Gh54q7RFHRdLeFw$q295SBBT5iTx8yNCnXcKvi/+94Sxhu77WjIZ/Hiv3sw', 'joy@g.ckmvv', '01766221373', 'Bangladesh', 'Sylhet', 'userPictures/0.5930190852331867.jpg', '2021-10-22 08:38:40', '2021-10-22 08:38:40'),
(2, 'Bipro', 'Bhowmik', 'Nothing', 'Player', '12345678', 'Batsman', 'RHB', 'RHB', 'Sylhet', '31-10-1998', '6 feet', 60.00, 'Male', 'Black Normal', '$argon2id$v=19$t=3,m=4096,p=1$SQRCcAW7+kDx7ig/cdIKbA$dXY4iKyA1E2MKaYgXV/iF3qsTG04MJCIIInTpxTQwhw', 'joy@g.ckm', '01766221373', 'Bangladesh', 'Sylhet', 'userPictures/0.49032925012902173.jpg', '2021-10-22 08:39:16', '2021-10-22 08:39:16');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `adonis_schema`
--
ALTER TABLE `adonis_schema`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `balls`
--
ALTER TABLE `balls`
  ADD PRIMARY KEY (`id`),
  ADD KEY `balls_over_id_foreign` (`over_id`),
  ADD KEY `balls_user_id_foreign` (`user_id`),
  ADD KEY `balls_bowler_id_foreign` (`bowler_id`),
  ADD KEY `balls_halper_id_foreign` (`halper_id`),
  ADD KEY `balls_out_player_id_foreign` (`out_player_id`);

--
-- Indexes for table `overs`
--
ALTER TABLE `overs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `adonis_schema`
--
ALTER TABLE `adonis_schema`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `balls`
--
ALTER TABLE `balls`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `overs`
--
ALTER TABLE `overs`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `balls`
--
ALTER TABLE `balls`
  ADD CONSTRAINT `balls_bowler_id_foreign` FOREIGN KEY (`bowler_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `balls_halper_id_foreign` FOREIGN KEY (`halper_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `balls_out_player_id_foreign` FOREIGN KEY (`out_player_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `balls_over_id_foreign` FOREIGN KEY (`over_id`) REFERENCES `overs` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `balls_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
