# DDD(Domain Driven Design)
勉強ついでにシステム作る

# プロジェクトのゴール
納得が行くものが出来ればいい

# 環境構築
```
依存関係のインストール
npm install
```

```
プロジェクトのビルド
npm run build
```

```
本番環境
npm run server-prd
```

```
テスト環境
npm run server-evl
```

# DockerComposeを使用する場合
```
当ルートディレクトリにて下記コマンドを実行
docker-compose up -d
```

# 当プロジェクトを利用する場合

".env"を定義する必要があります。
```
SAKURA_API_DB_HOST=XXXX
SAKURA_API_DB_PORT=XXXX
SAKURA_API_DB_USER=XXXX
SAKURA_API_DB_PASSWORD=XXXX
SAKURA_API_DB_NAME=XXXX
SAKURA_API_DISCORD_TOKEN=XXXX
SAKURA_API_DISCORD_SERVERLIST_CHANNELID=XXXX
SAKURA_API_DISCORD_TOPMASS_CHANNELID=XXXX
```

"serviceAccountKey.json"をFirebaseで発行する必要があります。

"sakura.db"を作成する必要があります。
