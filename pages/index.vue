<template>
  <div class="container">
    <div class="columns is-centered is-vcentered">
      <div class="column is-8">
        <div class="box">
          <p class="is-size-4">
            ごちイラ ニュースとは?
          </p>
          <p class="is-size-6">
            あなたの代わりに定期的にごちうさ公式サイトを自動で巡回し、
            新着情報を発見次第、即座にあなたに連絡するというツールです。
          </p>
          <br>
          <p class="is-size-4">
            どうやって連絡するの?
          </p>
          <p class="is-size-6">
            <a class="has-text-weight-bold" href="https://notify-bot.line.me/ja/">LINE Notify</a>というサービスを経由し、
            LINEで通知メッセージを送ります。
          </p>
          <br>
          <p class="is-size-4">
            安全なの?
          </p>
          <p class="is-size-6">
            通知を送るのに必要な識別子のみを使用します。
            ユーザー名やパスワードを取得することはありません。
            通知が不要になりましたら、<a class="has-text-weight-bold" href="https://notify-bot.line.me/my/">こちら</a>から通知を解除できます。
          </p>
          <br>
          <div class="columns is-centered">
            <div class="column is-6">
              <div class="has-text-centered">
                <a :href="connectUrl" class="button is-medium is-primary">
                  LINEで新着通知を受け取る
                </a>
              </div>
            </div>
          </div>
          <div class="has-text-centered">
            <a
              class="button is-large"
              href="https://social-plugins.line.me/lineit/share?url=https://news.gochiusa.team"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span class="icon has-text-primary">
                <font-awesome-icon class="fa-lg" :icon="['fab', 'line']" />
              </span>
            </a>
            <a
              class="button is-large"
              href="https://twitter.com/intent/tweet?text=%E3%81%94%E3%81%A1%E3%82%A4%E3%83%A9%E3%83%8B%E3%83%A5%E3%83%BC%E3%82%B9%0Ahttps://news.gochiusa.team"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span class="icon has-text-info">
                <font-awesome-icon class="fa-lg" :icon="['fab', 'twitter-square']" />
              </span>
            </a>
            <a
              class="button is-large"
              href="#"
              @click="shareSite"
            >
              <span class="icon">
                <font-awesome-icon class="fa-lg" icon="share-alt-square" />
              </span>
            </a>
          </div>
          <br>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      connectUrl: '#'
    }
  },
  mounted () {
    this.connectUrl = this.getConnectUrl()
  },
  methods: {
    getConnectUrl () {
      const NOTIFY_ENDPOINT = 'https://notify-bot.line.me/oauth/authorize'
      const NOTIFY_REDIRECT_URI = 'https://news.gochiusa.team/connect'
      const NOTIFY_PARAMS = new URLSearchParams()
      NOTIFY_PARAMS.append('response_type', 'code')
      NOTIFY_PARAMS.append('client_id', 'WE6R3AP5qv2pAVaxcGGLvo')
      NOTIFY_PARAMS.append('state', Math.random().toString(36).slice(-8))
      NOTIFY_PARAMS.append('scope', 'notify')
      NOTIFY_PARAMS.append('redirect_uri', NOTIFY_REDIRECT_URI)
      return NOTIFY_ENDPOINT + '?' + NOTIFY_PARAMS.toString()
    },
    async shareSite () {
      if (navigator.share) {
        const shareData = {
          title: 'ごちイラ ニュース',
          url: 'https://news.gochiusa.team'
        }
        await navigator.share(shareData)
      } else {
        alert('サポート外のブラウザです')
      }
    }
  }
}
</script>
