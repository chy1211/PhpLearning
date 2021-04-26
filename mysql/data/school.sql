-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 
-- 伺服器版本： 10.4.11-MariaDB
-- PHP 版本： 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `school`
--

-- --------------------------------------------------------

--
-- 資料表結構 `student`
--

CREATE TABLE `student` (
  `id` varchar(10) COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(8) COLLATE utf8mb4_bin NOT NULL,
  `birth` date NOT NULL,
  `addr` varchar(60) COLLATE utf8mb4_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- 傾印資料表的資料 `student`
--

INSERT INTO `student` (`id`, `name`, `birth`, `addr`) VALUES
('C109156201', '王小明', '2021-03-04', '台北市'),
('C109156202', '張冰典', '2021-03-18', '新北市'),
('C109156203', '錢俊憲', '2021-03-12', '桃園市'),
('C109156204', '王慧娟', '2021-03-17', '新竹市'),
('C109156205', '王詩婷', '2021-03-25', '苗栗縣'),
('C109156206', '童鳳淑', '2021-03-18', '台中市'),
('C109156207', '張淑倩', '2021-03-18', '彰化縣'),
('C109156208', '鄭世昌', '2021-03-11', '雲林縣'),
('C109156209', '解家豪', '2021-03-19', '嘉義市'),
('C109156210', '黃瑋旭', '2001-12-11', '台中市');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
