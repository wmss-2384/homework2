// 设定高考日期
const examDate = new Date("2025-06-07T00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = examDate - now;

  // 计算时间单位
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // 输出结果
  document.getElementById(
    "countdown"
  ).innerHTML = `${days}天 ${hours}小时 ${minutes}分钟 ${seconds}秒`;

  // 如果倒计时结束
  if (distance < 0) {
    clearInterval(countdownInterval);
    document.getElementById("countdown").innerHTML = "高考已结束";
  }
}

// 每隔一秒更新倒计时
const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown(); //初始化调用