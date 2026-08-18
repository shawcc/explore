# 飞书项目「发现」评审 Demo

基于《【商业化】模板中心升级为“发现”》PRD 制作的高保真前端 Demo。用于评审 AI 应用、插件、模板和解决方案的全局展示、聚合详情、运营排序及内部维护链路。

## 运行

环境要求：Node.js 20+。

```bash
npm install
npm run dev -- --port 4178
```

访问：`http://localhost:4178/discover`

生产构建：

```bash
npm run build
npm run preview -- --port 4178
```

## 页面路由

| 路由 | 页面 |
| --- | --- |
| `/discover` | 发现首页 |
| `/discover/ai/:id` | AI 应用聚合详情 |
| `/discover/plugin/:id` | 插件详情 |
| `/discover/template/:id` | 模板详情 |
| `/discover/solution/:id` | 解决方案详情 |
| `/admin/ai-apps` | AI 应用聚合管理列表 |
| `/admin/ai-apps/new` | 新建 AI 应用 |
| `/admin/ai-apps/:id/edit` | 编辑 AI 应用 |
| `/admin/distribution` | 渠道排序管理 |
| `/template-center` | 历史模板中心链接兼容演示 |
| `/demo/settings` | 重定向至发现首页，通过右下角面板操作 |

## Demo 控制面板

点击页面右下角「Demo 设置」，可切换：

- 同页分区 / Tab 模式
- 锚点导航
- 普通用户 / 空间管理员
- 正常、版本不支持、灰度、地区不可用租户
- 正常、分类为空、分类失败、全部失败、加载中
- 置顶标识、取消置顶、动态/人工置顶顺序
- 渠道隐藏、新品冷启动
- 权限不足、详情下架
- AI 单形态、部分形态、全部形态不可用
- 首次升级气泡与卡片调试信息

## 已实现

- 飞书项目产品内一级导航，「模板中心」升级为「发现」
- 四类供给统一卡片骨架及差异化字段
- 同页纵向分区和四 Tab 两种首页结构
- AI 字段、AI 节点、AI 操作的聚合展示与去重
- 四类详情页及返回分类、滚动位置记忆
- AI 使用形态选择及原配置链路模拟弹窗
- AI 应用管理、发布/下线、发现渠道隐藏
- AI 聚合编辑、实时预览、校验、草稿、发布、离开确认
- 原始实体多选及重复包装风险确认
- 四类渠道排序、最多 3 个置顶、有效期、隐藏和顺序预览
- 加载、空、单类失败、全部失败、下架和权限不足状态
- 1024px、1280px、1440px Web 响应式布局
- 键盘焦点、Toast、确认弹窗和加载骨架屏

## Mock 边界

以下能力仅在前端模拟，不连接真实系统：

- 登录、权限、租户版本、地区及灰度判断
- 安装、创建、配置与审批链路
- 动态排序算法、埋点和来源系统状态同步
- 图标上传、真实拖拽持久化与管理操作记录
- 后端存储、接口请求及跨会话数据保存

Mock 数据集中在 [`src/data/mockData.js`](src/data/mockData.js)，统一数据结构支持 PRD 要求的类型、来源、标签、使用量、形态、发布时间、置顶周期、可用范围和详情路由等字段。

## 关键组件

- `DemoContext`：全局评审状态、可见性、排序与 Mock 数据变更
- `AppShell`：产品一级导航、管理侧栏、升级气泡和 Toast
- `SupplyCard`：四类供给共用卡片骨架
- `DemoSettings`：评审状态控制面板
- `DiscoverPage`：双首页结构、分类降级和位置记忆
- `DetailPage`：四类详情及 AI 使用形态承接
- `AiEditPage`：聚合编辑、关联实体、风险与发布校验
- `DistributionPage`：渠道置顶、有效期、隐藏和顺序预览

## 核心截图

- [`screenshots/discover-sections.png`](screenshots/discover-sections.png)
- [`screenshots/discover-tabs.png`](screenshots/discover-tabs.png)
- [`screenshots/ai-detail.png`](screenshots/ai-detail.png)
- [`screenshots/ai-edit.png`](screenshots/ai-edit.png)
- [`screenshots/distribution.png`](screenshots/distribution.png)
