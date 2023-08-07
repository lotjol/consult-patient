<script>
  export default {
    onLaunch: function () {
      console.log('App Launch')
    },
    onShow: function () {
      console.log('App Show')
    },
    onHide: function () {
      console.log('App Hide')
    },
  }
</script>

<style lang="scss">
  @import 'fonts.scss';

  image {
    vertical-align: middle;
  }

  button:after {
    display: none;
  }

  .uni-button {
    height: 88rpx;
    text-align: center;
    line-height: 88rpx;
    border-radius: 88rpx;
    color: #fff;
    font-size: 32rpx;
    background-color: #20c6b2;
  }
</style>
