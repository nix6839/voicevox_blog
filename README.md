# VOICEVOX BLOG

VOICEVOX の公式サイトのリポジトリです。<br>
https://voicevox.hiroshiba.jp/

## 環境構築

Node v20.14.0、pnpm v9.2.0 を用いて開発されています。

```bash
npm ci
```

## ローカル環境でチェック

```bash
pnpm dev
```

もしくは

```bash
pnpm build && pnpm preview
```

### プレビュー版

[プレビュー版ページ](https://preview--voicevox.netlify.app/)

Netlify を使ってプレビュー環境デプロイを行っています。
`preview`ブランチに push すると、Netlify のプレビュー環境にデプロイされます。

## add resource

TODO

## 音量に関して

ffmpeg で音量を調べて、だいたい LUFS 値が -20~-23 になるように調整しています。

```bash
# 音量を調べる
audio_file=audio.wav
ffmpeg -nostats -i $audio_file -filter_complex ebur128 -f null - </dev/null 2>&1 |
  grep -3 "Integrated loudness:" |
  grep "I:" |
  tail -n1

# 音量を調整する（例えば -17 LUFS を -20 LUFS くらいにしたい場合は volume=-3dB にする）
audio_file=audio.wav
output_file=output.wav
ffmpeg -i $audio_file -af volume=-3dB $output_file
```

## サムネイル生成

一部のサムネイルは HTML をレンダリングしたものを画像化しています。
次のコマンドで更新してください。

TODO

## タイポチェック

[typos](https://github.com/crate-ci/typos) を使ってタイポのチェックを行っています。
[typos をインストール](https://github.com/crate-ci/typos#install) した後

```bash
typos
```

## LICENSE

VOICEVOX の開発のための利用のみ許可されます。
異なるライセンスを取得したい場合は、ヒホ（twitter: @hiho_karuta）に求めてください。

## 謝辞

`src/images/nc238325.jpg` ･･･ https://commons.nicovideo.jp/material/nc238325
