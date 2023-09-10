export function sleep(ms: number): Promise<undefined> {
    // 补全此处代码
      throw new Error('功能待实现');
  }
  
  async function main(){
      console.log('a')
      await sleep(1000);
      console.log('b');
      await sleep(1000);
      console.log('c');
  }
  main()
  
  export default {}