import { watch,run } from 'watchlist';


async function task() {
  // 文件变动后执行的操作
  // console.log('~> something updated!');
  await run(`pwd`);
  // console.log("[ data ]-8", data)
}

// 监视变动
async function watchFile() {
  await watch(['/Users/kerin/frontStudy/homework/README.md','./test.js'], task, {
    ignore: 'fixtures'
  });
}

watchFile();