const formDef1 =
    [
        { label: 'Название сайта:', kind: 'longtext', name: 'sitename' },
        { label: 'URL сайта:', kind: 'longtext', name: 'siteurl' },
        { label: 'Посетителей в сутки:', kind: 'number', name: 'visitors' },
        { label: 'E-mail для связи:', kind: 'shorttext', name: 'email' },
        {
            label: 'Рубрика каталога:', kind: 'combo', name: 'division',
            variants: [{ text: 'здоровье', value: 1 }, { text: 'домашний уют', value: 2 }, { text: 'бытовая техника', value: 3 }]
        },
        {
            label: 'Размещение:', kind: 'radio', name: 'payment',
            variants: [{ text: 'бесплатное', value: 1 }, { text: 'платное', value: 2 }, { text: 'VIP', value: 3 }]
        },
        { label: 'Разрешить отзывы:', kind: 'check', name: 'votes' },
        { label: 'Описание сайта:', kind: 'memo', name: 'description' },
        { caption: 'Опубликовать', kind: 'submit' },
    ];

const formDef2 =
    [
        { label: 'Фамилия:', kind: 'longtext', name: 'lastname' },
        { label: 'Имя:', kind: 'longtext', name: 'firstname' },
        { label: 'Отчество:', kind: 'longtext', name: 'secondname' },
        { label: 'Возраст:', kind: 'number', name: 'age' },
        { caption: 'Зарегистрироваться', kind: 'submit' },
    ];

function buildForm(fd, formElem) {
    function crateLabel(fildDef){
        let labelElem = document.createElement("span")
                labelElem.innerHTML = fildDef.label
                formElem.appendChild(labelElem)
    };
    function createBr(fildDef){
        let brElem = document.createElement("br")
        brElem.innerHTML = fildDef.br
        formElem.appendChild(brElem)
    }
    for (let fildDef of fd) {
        createBr(fildDef)
        switch (fildDef.kind) {
            case 'longtext': {
                crateLabel(fildDef)
                let inputElem = document.createElement("input")
                inputElem.type = "text"
                inputElem.name = fildDef.name
                formElem.appendChild(inputElem)
                break;
            }
            case 'number': {
                crateLabel(fildDef)
                let inputElem = document.createElement("input")
                inputElem.type = "number"
                inputElem.name = fildDef.name
                formElem.appendChild(inputElem)
                break;
            }
            case 'shorttext': {
                crateLabel(fildDef)
                let inputElem = document.createElement("input")
                inputElem.type = "text"
                inputElem.name = fildDef.name
                formElem.appendChild(inputElem)
                break;
            }
            case 'memo': {
                crateLabel(fildDef)
                let inputElem = document.createElement("input")
                inputElem.type = "text"
                inputElem.name = fildDef.name
                formElem.appendChild(inputElem)
                break;
            }
            case 'submit': {
                let inputElem = document.createElement("input")
                inputElem.type = "submit"
                inputElem.value = fildDef.caption
                formElem.appendChild(inputElem)
                break;
            }
            case 'check': {
                crateLabel(fildDef)
                let inputElem = document.createElement("input")
                inputElem.type = "checkbox"
                inputElem.name = fildDef.name
                formElem.appendChild(inputElem)
                break;
            }
            case 'combo': {
                crateLabel(fildDef)
                let selectElem = document.createElement("select")
                selectElem.type = "text"
                selectElem.name = fildDef.name
                formElem.appendChild(selectElem)
                fildDef.variants.forEach(variant => {
                    let optionElem = document.createElement("option")
                    optionElem.innerHTML=variant.text
                    optionElem.setAttribute('value', variant.value)
                    selectElem.appendChild(optionElem)
                })
                break;
            }
            case 'radio': {
                crateLabel(fildDef)
                let fieldsetElem = document.createElement("fieldset")
                fieldsetElem.type = "radio"
                fieldsetElem.name = fildDef.name
                formElem.appendChild(fieldsetElem)
                fildDef.variants.forEach(variant => {
                    let spanElem = document.createElement("span")
                spanElem.innerHTML = variant.text
                fieldsetElem.appendChild(spanElem)
                    let optionElem = document.createElement("input")
                    optionElem.type="radio"
                    optionElem.innerHTML=variant.text
                    optionElem.setAttribute('value', variant.value)
                    optionElem.setAttribute('name', "capch")
                    fieldsetElem.appendChild(optionElem)
                })
                break;
            }
        }

    }
    console.log(f1)
}

buildForm(formDef1,document.forms.f1)
buildForm(formDef2,document.forms.f2)