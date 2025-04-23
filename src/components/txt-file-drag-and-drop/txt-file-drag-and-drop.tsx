import { DragEventHandler, Fragment, useEffect } from 'react';
import classes from './txt-file-drag-and-drop.module.css';

function TxtFileDragAndDrop() {
  let dropZone: HTMLElement;
  let output: HTMLElement;

  useEffect(() => {
    dropZone = document.getElementById('drop-zone')!;
    output = document.getElementById('output')!;
  }, []);

  // Забороняємо відкриття файлу при перетягуванні
  document.addEventListener('dragover', (event) => event.preventDefault());
  document.addEventListener('drop', (event) => event.preventDefault());

  // Обробка події перетягування у drop-зону
  const dropOverHandler = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    dropZone.style.backgroundColor = '#e0f7ff'; // Візуальна підказка
  };

  const dragLeaveZone = () => {
    dropZone.style.backgroundColor = ''; // Скидання стилю
  };

  const dropHandler = (event: DragEvent) => {
    event.preventDefault();
    dropZone.style.backgroundColor = ''; // Скидання стилю

    let file;

    if (event.dataTransfer) {
      file = event.dataTransfer.files[0];
    }

    if (!file) {
      alert('Будь ласка, перетягніть файл');
      return;
    }

    if (file.type !== 'text/plain') {
      alert('Підтримуються лише .txt файли!');
      return;
    }

    // Читаємо файл
    const reader = new FileReader();
    reader.onload = () => {
      output.textContent = reader.result as string; // Виводимо вміст у браузер
    };
    reader.readAsText(file);
  };

  return (
    <Fragment>
      <div
        onDragOver={dropOverHandler}
        onDragLeave={dragLeaveZone}
        onDrop={dropHandler}
        id="drop-zone"
        className={classes.dropZone}
      >
        Перетягніть .txt файл сюди
      </div>
      <div id="output" className={classes.output}></div>
    </Fragment>
  );
}

export default TxtFileDragAndDrop;
