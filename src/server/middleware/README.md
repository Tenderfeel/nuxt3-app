# Server Middleware

https://v3.nuxtjs.org/docs/directory-structure/server#server-middleware

Nuxtは、プロジェクトのサーバーミドルウェアを作成するために、`~/server/middleware` 内のすべてのファイルを自動的に読み込みます。

これらのファイルは、独自のルートにマップされるAPIルートとは異なり、すべてのリクエストで実行されます。
これは通常、すべての応答に共通のヘッダーを追加したり、応答をログに記録したり、要求チェーンの後半で使用するために受信要求オブジェクトを変更したりできるようにするためです。

各ファイルは、リクエストを処理するデフォルトの関数をエクスポートする必要があります。

```
export default async (req, res) => {
  req.someValue = true
}
```