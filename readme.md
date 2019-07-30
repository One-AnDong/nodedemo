# node 增删改查

## 技术栈

```javascript
express + pug + mysql + bootstrap + jq
```

## 项目运行

```
git clone git@github.com:One-AnDong/nodedemo.git
cd nodedemo
npm install 或 yarn(推荐)
npm run start 或 yarn start
```

# 接口信息

### 删除英雄

- 请求路径：/api/deleteHero

- 请求方法：GET

- 请求参数：

  | 参数名称 | 参数说明            | 备注 |
  | -------- | ------------------- | ---- |
  | id       | 需要删除的英雄的 id | 无   |

### 添加英雄

- 请求路径：/api/addHero

- 请求方法：POST

- 请求参数：

  | 参数名称 | 参数说明 | 备注 |
  | -------- | -------- | ---- |
  | name     | 用户名   |      |
  | gender   | 性别     |      |
  | birthday | 生日     |      |

### 查找英雄

- 请求路径：/api/getHero

- 请求方法：GET

- 请求参数：

  | 参数名称 | 参数说明          | 备注 |
  | -------- | ----------------- | ---- |
  | id       | 需要查询英雄的 id |      |

### 修改英雄信息

- 请求路径：/api/editHero

- 请求方法：POST

- 请求参数：

  | 参数名称 | 参数说明      | 备注 |
  | -------- | ------------- | ---- |
  | id       | 修改英雄的 Id | 必选 |
  | name     | 用户名        | 可选 |
  | gender   | 性别          | 可选 |
  | birthday | 生日          | 可选 |

# 目录结构

```javascript
├── model
│   ├── heroModel.js
│   └── mysqlCfg.js
├── controller
│   └── heroController.js
├── views
│   ├── add.pug
│   └── index.pug
├── static
│   ├── css
│   ├── images
│   └── js
├── node.sql
├── package.json
├── router.js
├── app.js
├── yarn-error.log
└── yarn.lock

```
