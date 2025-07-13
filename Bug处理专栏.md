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
