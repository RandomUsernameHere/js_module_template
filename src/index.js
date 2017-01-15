/*
 * Стандартный шаблон для модуля,
 * предполагающего многократное использование
 * version 1.0.0
 * repository https://github.com/RandomUsernameHere/js_module_template
 */
;(function (window, $) {

    /* Метаданные модуля */
    var Metadata = {
            vendor: '', //Vendor name
            name: '',//Package name
            description: '',//Package description
            version: '',//Package version
            license: '',//Package description
            repository: ''//Repository url
    };

    /*Флаг остановки по отсутсвию зависимости*/
    var stopRequired = false;

    /*Проверки на отсутсвие зависимостей*/
    (function () {
        if (window === undefined) {
            console.error('window is required');
            stopRequired = true;
            return false;
        }

        if ($ === undefined) {
            console.error('jQuery is required');
            stopRequired = true;
            return false;
        }
    })();

    if (stopRequired) {
        return false;
    }

    /*Устанавливаем неинициализированный объект в глобальное пространство имен*/
    window.testModule = new function () {
        var that = this;

        /*Опции и настройки*/
        this.options = {};

        /*Инициализация*/
        this.init = function (options) {
            this.options = $.extend(this.options, this.getDefaults, options);

            //Если все в порядке, возвращаем объект
            return this;
        };

        /*Метод, который возвращает объект с умолчаниями*/
        this.getDefaults = function () {
            return {};
        };

        /*Возвращает метаданные модуля*/
        this.getMetadata = function () {
            return Metadata;
        };

        /*В этом методе, по возможности, следует установить обработчики событий*/
        this.addEventHandlers = function () {
        };
    };

}(window, jQuery));