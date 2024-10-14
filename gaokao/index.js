// 设定高考日期
const examDate = new Date("2025-06-07T00:00:00").getTime();

// 计算剩余时间的函数
function calculateTimeRemaining(endTime) {
  const now = new Date().getTime();
  const distance = endTime - now;

  if (distance < 0) {
    return null;  // 倒计时结束
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
}

// 更新倒计时显示的函数
function updateCountdownDisplay(timeRemaining) {
  if (!timeRemaining) {
    document.getElementById("countdown").innerHTML = "高考已结束";
    return;
  }

  const { days, hours, minutes, seconds } = timeRemaining;
  document.getElementById("countdown").innerHTML = `${days}天 ${hours}小时 ${minutes}分钟 ${seconds}秒`;
}

// 倒计时更新函数
function updateCountdown() {
  const timeRemaining = calculateTimeRemaining(examDate);

  if (!timeRemaining) {
    clearInterval(countdownInterval);  // 停止倒计时
  }

  updateCountdownDisplay(timeRemaining);
}

// 初始化倒计时并每秒更新
const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();  // 页面加载时立即调用一次
