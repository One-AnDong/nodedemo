/*
 Navicat Premium Data Transfer

 Source Server         : Joe
 Source Server Type    : MySQL
 Source Server Version : 80016
 Source Host           : localhost:3306
 Source Schema         : node

 Target Server Type    : MySQL
 Target Server Version : 80016
 File Encoding         : 65001

 Date: 02/08/2019 11:11:24
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `name` varchar(20) NOT NULL,
  `gender` varchar(1) NOT NULL,
  `birthday` date NOT NULL,
  `isdelete` int(10) NOT NULL DEFAULT '0',
  `img` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=60 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
BEGIN;
INSERT INTO `user` VALUES (1, '李白白', '男', '2019-07-02', 1, '0.jpg');
INSERT INTO `user` VALUES (2, '小乔', '男', '2019-07-12', 0, 'upload_b67895f7ff93744a2b97fed5f2b11bd4.jpg');
INSERT INTO `user` VALUES (3, '张飞', '男', '2019-07-12', 0, 'upload_b5be2b9441c16878889f812352fb0364.jpg');
INSERT INTO `user` VALUES (4, '亚瑟', '男', '2019-02-02', 1, '0.jpg');
INSERT INTO `user` VALUES (5, 'joe', '男', '2019-02-02', 0, 'upload_cc71de252abf76644c4b541efd101f89.JPG');
INSERT INTO `user` VALUES (6, '墨子', '男', '2019-02-26', 1, '0.jpg');
INSERT INTO `user` VALUES (7, '修改性别', '女', '2019-03-02', 1, '0.jpg');
INSERT INTO `user` VALUES (8, '修改生日', '女', '2019-03-05', 0, 'upload_e56df919a26c15467296edb0404d607b.jpg');
INSERT INTO `user` VALUES (9, 'test', '男', '2019-03-02', 0, 'upload_30b30820d11ad5a11e7d5f21933af616.jpg');
INSERT INTO `user` VALUES (10, 'test', '男', '2019-03-02', 0, '0.jpg');
INSERT INTO `user` VALUES (11, 'test', '男', '2019-03-02', 0, '0.jpg');
INSERT INTO `user` VALUES (12, 'test', '男', '2019-03-02', 0, '0.jpg');
INSERT INTO `user` VALUES (21, 'k', '男', '2019-07-03', 0, '0.jpg');
INSERT INTO `user` VALUES (22, '23', '男', '2019-07-17', 0, '0.jpg');
INSERT INTO `user` VALUES (24, '66', '男', '2019-07-08', 1, '0.jpg');
INSERT INTO `user` VALUES (25, 'ewr', '男', '2019-02-03', 1, '0.jpg');
INSERT INTO `user` VALUES (27, 'test', '男', '2019-03-03', 0, '0.jpg');
INSERT INTO `user` VALUES (28, 'test', '男', '2019-03-03', 0, '0.jpg');
INSERT INTO `user` VALUES (29, 'test', '男', '2019-03-03', 0, '0.jpg');
INSERT INTO `user` VALUES (30, 'test', '男', '2019-03-03', 0, '0.jpg');
INSERT INTO `user` VALUES (31, 'test', '男', '2019-03-03', 0, '0.jpg');
INSERT INTO `user` VALUES (32, 'test', '男', '2019-03-03', 0, '0.jpg');
INSERT INTO `user` VALUES (33, 'test', '男', '2019-03-03', 1, '0.jpg');
INSERT INTO `user` VALUES (34, 'test', '男', '2019-03-03', 1, '0.jpg');
INSERT INTO `user` VALUES (35, 'test', '男', '2019-03-03', 1, '0.jpg');
INSERT INTO `user` VALUES (36, 'test', '男', '2019-03-03', 1, '0.jpg');
INSERT INTO `user` VALUES (37, 'test', '男', '2019-03-03', 1, '0.jpg');
INSERT INTO `user` VALUES (38, 'test', '男', '2019-03-03', 1, '0.jpg');
INSERT INTO `user` VALUES (39, 'test', '男', '2019-07-18', 1, '0.jpg');
INSERT INTO `user` VALUES (40, '234', '男', '2019-07-03', 0, '0.jpg');
INSERT INTO `user` VALUES (41, '234', '男', '2019-07-03', 0, '0.jpg');
INSERT INTO `user` VALUES (42, '2', '男', '2019-07-02', 1, '0.jpg');
INSERT INTO `user` VALUES (43, '3', '男', '2019-07-01', 0, '0.jpg');
INSERT INTO `user` VALUES (44, '23', '男', '2019-08-05', 1, 'upload_15bb04b544398a7e5e28e9307d0da0e8.jpeg');
INSERT INTO `user` VALUES (45, 'test', '男', '2019-08-05', 1, '0.jpg');
INSERT INTO `user` VALUES (46, 'df', '男', '2019-08-06', 1, '0.jpg');
INSERT INTO `user` VALUES (47, 'df', '男', '2019-08-06', 1, '0.jpg');
INSERT INTO `user` VALUES (48, 'df', '男', '2019-08-06', 1, '0.jpg');
INSERT INTO `user` VALUES (49, 'test', '男', '2019-07-30', 1, '0.jpg');
INSERT INTO `user` VALUES (50, '测试', '男', '2019-08-08', 1, '0.jpg');
INSERT INTO `user` VALUES (51, 'test', '男', '2019-08-07', 1, 'upload_029f5b492644b8864891e702f42703ad.jpeg');
INSERT INTO `user` VALUES (52, 'er', '男', '2019-08-06', 1, '0.jpg');
INSERT INTO `user` VALUES (53, 'sdf', '男', '2019-08-15', 0, 'upload_665f36cdb38fe1c12900ef53c09e06f9.jpeg');
INSERT INTO `user` VALUES (54, '34', '男', '2019-07-31', 0, '0.jpg');
INSERT INTO `user` VALUES (55, '24', '男', '2019-08-01', 0, '0.jpg');
INSERT INTO `user` VALUES (56, '沈德符', '男', '2019-08-01', 0, '0.jpg');
INSERT INTO `user` VALUES (57, 'hello', '男', '2019-07-30', 0, '0.jpg');
INSERT INTO `user` VALUES (58, 'test', '女', '2019-08-14', 0, '0.jpg');
INSERT INTO `user` VALUES (59, '43', '男', '2019-08-06', 0, '0.jpg');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
