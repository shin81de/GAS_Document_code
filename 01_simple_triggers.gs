/**
 * 独自メニューGASの表示
 */
function onOpen(e) {
  // アドイン利用する関数
  const ui            = DocumentApp.getUi();
  const functionName1 = 'insertLine';

  ui.createMenu('GAS')
  .addItem('01_1行Line挿入', functionName1)
  .addToUi();
}
