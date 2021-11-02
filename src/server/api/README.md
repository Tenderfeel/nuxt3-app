# server/api - API Routes

Nuxt3は `~/server/api` ディレクトリ内のすべてのファイルを自動的に読み込んでAPIエンドポイントを作成する。  
`hello.ts` の場合、`/api/hello` にアクセスすると Hello World が表示される。
 
各ファイルは、APIリクエストを処理するデフォルトの関数をエクスポートしなければならない。  
Promise　または JSONデータ を直接返すことができる。  
何も返さない場合はres.end()を使用する。