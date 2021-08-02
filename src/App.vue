<template>
  <div class="home">
    <!-- 只要class前面沒有sm/md/lg/xl之類的，就是在指手機 -->
    <!-- max-w-md // max-width: 28rem; (xs 20rem / sm 24rem / md 28rem / lg 32rem / xl 36rem / 2xl 42rem / 3xl 48rem / 4xl 56rem / 5xl 64rem / 6xl 72rem / 7xl 80rem / full 100%)-->
    <!-- mx-auto // margin-left: auto; margin-right: auto; -->
    <!-- bg-white // 白色背景-->
    <!-- rounded-xl // 圓角 (sm 0.125rem / '' 0.25rem / md 0.375rem / lg 0.5rem / xl 0.75rem / 2xl 1rem / 3xl 1.5rem / full 9999px)-->
    <!-- shadow-md // 陰影 ( sm / '' / md / lg / xl / 2xl / inner / none )-->
    <!-- overflow-hidden // 隱藏超出去的-->
    <!-- md:max-w-2xl // 寬度640px以上時，最大寬度42rem-->
    <!-- md:flex // 寬度640px以上時，用flex排版(為了做到水平排列)-->
    <!-- md:flex-shrink-0 // 寬度640px以上時，他維持正常大小，其他空間給他兄弟-->
    <!-- h-48 // 高度12rem (0 0px / 1 0.25rem / 2 0.5rem / 3 0.75rem / 4 1rem / 5 1.25rem / 6 1.5rem / 7 1.75rem / 8 2rem / 9 2.25rem / 10 2.5rem / 11 2.75rem / 12 3rem / 14 3.5rem / 16 4rem / 20 5rem / 24 6rem / 28 7rem / 32 8rem / 36 9rem / 40 10rem / 44 11rem / 48 12rem / 52 13rem / 56 14rem / 60 15rem / 64 16rem / 72 18rem / 80 20rem / 96 24rem / auto auto / px 1px / 0.5 0.125rem / 1.5 0.375rem / 2.5 0.625rem / 3.5 0.875rem / 1/2 50% / 1/3 33.333333% / 2/3 66.666667% / 1/4 25% / 2/4 50% / 3/4 75% / 1/5 20% / 2/5 40% / 3/5 60% / 4/5 80% / 1/6 16.666667% / 2/6 33.333333% / 3/6 50% / 4/6 66.666667% / 5/6 83.333333% / full 100% / screen 100vh) -->
    <!-- w-full // 寬度100% -->
    <!-- object-cover // object-fit: cover; (填滿他爸，並等比縮放)-->
    <!-- md:h-full // 寬度640px以上時，高度100%-->
    <!-- md:w-48 // 寬度640px以上時，寬度12rem-->
    <!-- p-8 // 內距2rem (0 0px / 1 0.25rem / 2 0.5rem / 3 0.75rem / 4 1rem / 5 1.25rem / 6 1.5rem / 7 1.75rem / 8 2rem / 9 2.25rem / 10 2.5rem / 11 2.75rem / 12 3rem / 14 3.5rem / 16 4rem / 20 5rem / 24 6rem / 28 7rem / 32 8rem / 36 9rem / 40 10rem / 44 11rem / 48 12rem / 52 13rem / 56 14rem / 60 15rem / 64 16rem / 72 18rem / 80 20rem / 96 24rem / px 1px / 0.5 0.125rem / 1.5 0.375rem / 2.5 0.625rem / 3.5 0.875rem)-->
    <!-- uppercase // 強制大寫-->
    <!-- tracking-wide // letter-spacing: 0.025em; 字距放大 (tighter -0.05em / tight -0.025em / normal 0em / wide 0.025em / wider 0.05em / widest 0.1em)-->
    <!-- text-sm // 字體大小0.875rem(xs 0.75rem / sm 0.875rem / base 1rem / lg 1.125rem / xl 1.25rem / 2xl 1.5rem / 3xl 1.875rem / 4xl 2.25rem / 5xl 3rem / 6xl 3.75rem / 7xl 4.5rem / 8xl 6rem / 9xl 8rem)-->
    <!-- text-indigo-500 // 文字顏色靛青-->
    <!-- font-semibold // 文字粗體600 (thin 100 / extralight 200 / light 300 / normal 400 / medium 500 / semibold 600 / bold 700 / extrabold 800 / black 900)-->
    <!-- block // 元素一個一個換行排列-->
    <!-- mt-1 // 外距往上 0.25rem-->
    <!-- text-lg // 字體大小1.125rem-->
    <!-- leading-tight // 行距1.25rem (3 .75rem / 4 1rem / 5 1.25rem / 6 1.5rem / 7 1.75rem / 8 2rem / 9 2.25rem / 10 2.5rem / none 1 / tight 1.25 / snug 1.375 / normal 1.5 / relaxed 1.625 / loose 2)-->
    <!-- font-medium // 文字粗體500-->
    <!-- text-black // 黑色文字-->
    <!-- hover:underline // 滑鼠滑入就有底線-->
    <!-- mt-2 // 外距向上 0.5rem-->
    <!-- text-gray-500 // 灰色文字-->
    <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div class=" md:flex">
        <div class=" md:flex-shrink-0">
          <img src="https://fakeimg.pl/100x100" alt="" class=" h-48 w-full object-cover md:h-full md:w-48">
        </div>
        <div class=" p-8">
          <div class=" uppercase tracking-wide text-sm text-indigo-500 font-semibold">有點寬寬的標題</div>
          <a href="" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">行距不要太大的連結</a>
          <p class=" mt-2 text-gray-500">我家這一一本戀愛生命貫徹手續主演浪費，安全三星但我站長轉換利用著名，等人給我們放在，釣魚國際錯誤章節沒有任何建議參加大全部分節目羅東實現建議，保障電子技術同事跟我科技有限公司首先作出絶不均為上次信號，眼裡一樣，恐怖刷新孤獨都在操作實在身體激烈還在宅宅哈哈。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>