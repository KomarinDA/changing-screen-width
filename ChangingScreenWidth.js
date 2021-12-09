/**
 * Name: Class ChangingScreenWidth
 * Description: The class generates buttons to change the width of the container for different devices.
 * 
 * 
 */

class ChangingScreenWidth {

    /**
     * 
     * @param {string} id - ID of the block whose width we will change
     */
    constructor(id) {
        this.id = id;
    }

    init(arr) {
        this.createBlockByButton();

        if (typeof arr === 'object' && arr) {
            this.createButtonsUser(arr);
        } else {
            this.createDefaultButtons();
        }
        this.createAndAppendBlockBackground();
        this.resizeWidthBlockByClickButton();
    }

    createDefaultButtons() {
        // Кнопки по умолчанию
        let _defaultButton = {
            '0': {
                widthElem: '320px',
                svg: `<svg xmlns="http://www.w3.org/2000/svg" class="bi bi-phone" viewBox="0 0 16 16"><path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" /><path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" /> </svg>`,
            },
            '1': {
                widthElem: '768px',
                svg: `<svg xmlns="http://www.w3.org/2000/svg" class="bi bi-tablet-landscape" viewBox="0 0 16 16"><path d="M1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4zm-1 8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8z" /><path d="M14 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0z" /></svg>`,
            },
            '2': {
                widthElem: '1200px',
                svg: `<svg xmlns="http://www.w3.org/2000/svg" class="bi bi-laptop" viewBox="0 0 16 16"><path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" /></svg>`,
            },
            '3': {
                widthElem: '100%',
                svg: `<svg xmlns="http://www.w3.org/2000/svg" class="bi bi-display" viewBox="0 0 16 16"><path d="M0 4s0-2 2-2h12s2 0 2 2v6s0 2-2 2h-4c0 .667.083 1.167.25 1.5H11a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1h.75c.167-.333.25-.833.25-1.5H2s-2 0-2-2V4zm1.398-.855a.758.758 0 0 0-.254.302A1.46 1.46 0 0 0 1 4.01V10c0 .325.078.502.145.602.07.105.17.188.302.254a1.464 1.464 0 0 0 .538.143L2.01 11H14c.325 0 .502-.078.602-.145a.758.758 0 0 0 .254-.302 1.464 1.464 0 0 0 .143-.538L15 9.99V4c0-.325-.078-.502-.145-.602a.757.757 0 0 0-.302-.254A1.46 1.46 0 0 0 13.99 3H2c-.325 0-.502.078-.602.145z" /></svg>`,
            },
        }

        for (let key in _defaultButton) {
            this.createAndAppendButton(_defaultButton[key]);
        }

    }

    createButtonsUser(arr) {
        // Парсим значения кнопок
        for (let key in arr) {
            this.createAndAppendButton(arr[key]);
        }
    }

    createBlockByButton() {
        let block = document.createElement('div');
        block.classList.add('csw_button_block');
        document.querySelector('body').prepend(block);
    }


    //{ width, svg }
    createAndAppendButton(arrayElement) {
        // Создание кнопки
        if (typeof arrayElement == 'object' && arrayElement) {

            let block = document.createElement('div');
            block.classList.add('csw_button');
            block.setAttribute("data-width", arrayElement.widthElem);
            block.innerHTML = arrayElement.svg;
            document.querySelector('.csw_button_block').append(block);

            let span = document.createElement('span');
            span.classList.add('csw_button--width-screen');
            span.innerHTML = arrayElement.widthElem;
            block.append(span);

            return true;
        }
        return false;
    }

    createAndAppendBlockBackground() {
        let block = document.createElement('div');
        block.id = 'csw_bg';
        document.querySelector('body').append(block);
    }


    resizeWidthBlockByClickButton() {
        // Изменяет ширину блока
        let block = document.getElementById(this.id);
        let but = document.querySelectorAll('.csw_button');
        let butWidth;

        for (let i = 0; i < but.length; i++) {
            but[i].addEventListener('click', function () {
                butWidth = but[i].getAttribute('data-width');
                block.style.width = butWidth;
            });
        }
    }
}