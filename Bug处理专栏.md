# Bug处理
## 字符编码问题
这里做了三个不同编码尝试
```python
# 尝试不同的编码方式
try:
    content = raw.content.decode("utf-8", "ignore")
except UnicodeDecodeError:
    try:
        content = raw.content.decode("gbk", "ignore")
    except UnicodeDecodeError:
        content = raw.content.decode("latin-1", "ignore")
```


## 标题中文编码错误问题
问题如下，编码错误
```
📄 pypi|éåç«ä½¿ç¨å¸®å©|åé³çå·¥å­¦é¢å¼æºéåç«|NanyangInstituteofTechnologyOpenSourceMirror → https://mirror.nyist.edu.cn/help/pypi/
✓ GET request successful for https://mirror.nyist.edu.cn/help/pypi/
✗ POST request failed for https://mirror.nyist.edu.cn/help/pypi/: Request error: 405 Client Error: Not Allowed for url: https://mirror.nyist.edu.cn/help/pypi/
✓ /help/pybombs/ (from: index.js?9b6b0d1)
📄 pybombs|éåç«ä½¿ç¨å¸®å©|åé³çå·¥å­¦é¢å¼æºéåç«|NanyangInstituteofTechnologyOpenSourceMirror → https://mirror.nyist.edu.cn/help/pybombs/
✓ GET request successful for https://mirror.nyist.edu.cn/help/pybombs/
✗ POST request failed for https://mirror.nyist.edu.cn/help/pybombs/: Request error: 405 Client Error: Not Allowed for url: https://mirror.nyist.edu.cn/help/pybombs/
✓ /help/packagist/ (from: index.js?9b6b0d1)
📄 packagist|éåç«ä½¿ç¨å¸®å©|åé³çå·¥å­¦é¢å¼æºéåç«|NanyangInstituteofTechnologyOpenSourceMirror → https://mirror.nyist.edu.cn/help/packagist/
✓ GET request successful for https://mirror.nyist.edu.cn/help/packagist/
✗ POST request failed for https://mirror.nyist.edu.cn/help/packagist/: Request error: 405 Client Error: Not Allowed for url: https://mirror.nyist.edu.cn/help/packagist/
✓ /help/openwrt/ (from: index.js?9b6b0d1)
📄 openwrt|éåç«ä½¿ç¨å¸®å©|åé³çå·¥å­¦é¢å¼æºéåç«|NanyangInstituteofTechnologyOpenSourceMirror → https://mirror.nyist.edu.cn/help/openwrt/
✓ GET request successful for https://mirror.nyist.edu.cn/help/openwrt/
✗ POST request failed for https://mirror.nyist.edu.cn/help/openwrt/: Request error: 405 Client Error: Not Allowed for url: https://mirror.nyist.edu.cn/help/openwrt/
✓ /help/openmediavault/ (from: index.js?9b6b0d1)
📄 OpenMediaVault|éåç«ä½¿ç¨å¸®å©|åé³çå·¥å­¦é¢å¼æºéåç«|NanyangInstituteofTechnologyOpenSourceMirror → https://mirror.nyist.edu.cn/help/openmediavault/
✓ GET request successful for https://mirror.nyist.edu.cn/help/openmediavault/
✗ POST request failed for https://mirror.nyist.edu.cn/help/openmediavault/: Request error: 405 Client Error: Not Allowed for url: https://mirror.nyist.edu.cn/help/openmediavault/
✓ /help/nodesource/ (from: index.js?9b6b0d1)
📄 nodesource|éåç«ä½¿ç¨å¸®å©|åé³çå·¥å­¦é¢å¼æºéåç«|NanyangInstituteofTechnologyOpenSourceMirror → https://mirror.nyist.edu.cn/help/nodesource/
✓ GET request successful for https://mirror.nyist.edu.cn/help/nodesource/
✗ POST request failed for https://mirror.nyist.edu.cn/help/nodesource/: Request error: 405 Client Error: Not Allowed for url: https://mirror.nyist.edu.cn/help/nodesource/
✓ /help/nodejs-release/ (from: index.js?9b6b0d1)
📄 nodejs-release|éåç«ä½¿ç¨å¸®å©|åé³çå·¥å­¦é¢å¼æºéåç«|NanyangInstituteofTechnologyOpenSourceMirror → https://mirror.nyist.edu.cn/help/nodejs-release/
✓ GET request successful for https://mirror.nyist.edu.cn/help/nodejs-release/
✗ POST request failed for https://mirror.nyist.edu.cn/help/nodejs-release/: Request error: 405 Client Error: Not Allowed for url: https://mirror.nyist.edu.cn/help/nodejs-release/
✓ /help/lineageOS/ (from: index.js?9b6b0d1)
📄 lineageOS|éåç«ä½¿ç¨å¸®å©|åé³çå·¥å­¦é¢å¼æºéåç«|NanyangInstituteofTechnologyOpenSourceMirror → https://mirror.nyist.edu.cn/help/lineageOS/
✓ GET request successful for https://mirror.nyist.edu.cn/help/lineageOS/
✗ POST request failed for https://mirror.nyist.edu.cn/help/lineageOS/: Request error: 405 Client Error: Not Allowed for url: https://mirror.nyist.edu.cn/help/lineageOS/
✓ /help/lineage-rom/ (from: index.js?9b6b0d1)
📄 lineage-rom|éåç«ä½¿ç¨å¸®å©|åé³çå·¥å­¦é¢å¼æºéåç«|NanyangInstituteofTechnologyOpenSourceMirror → https://mirror.nyist.edu.cn/help/lineage-rom/
✓ GET request successful for https://mirror.nyist.edu.cn/help/lineage-rom/
✗ POST request failed for https://mirror.nyist.edu.cn/help/lineage-rom/: Request error: 405 Client Error: Not Allowed for url: https://mirror.nyist.edu.cn/help/lineage-rom/
✓ /help/kubernetes/ (from: index.js?9b6b0d1)
📄 kubernetes|éåç«ä½¿ç¨å¸®å©|åé³çå·¥å­¦é¢å¼æºéåç«|NanyangInstituteofTechnologyOpenSourceMirror → https://mirror.nyist.edu.cn/help/kubernetes/
```
---
你看看这个，在输出标题的时候是不是乱码了
造成原因，requests库的编码检测流程：
1. 检查HTTP头中的Content-Type
2. 如果没有找到，尝试从HTML的<meta>标签中查找
3. 如果都没有找到，默认使用ISO-8859-1
所以会造成无法使用UTF-8去解析问题

```
原始中文：镜像站使用帮助
错误编码后：éåç«ä½¿ç¨å¸®å©
```

修改如下
> UTF-8是最安全的编码选择
```
if res.encoding is None or res.encoding == 'ISO-8859-1':
    res.encoding = 'utf-8'
```