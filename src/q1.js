/**
 * Create a Javascript Function used to return next fibonacci number every time you call it. 
 * Please do not expose any variable as we do not want any external script on the page to change those internal variables. 
 * 
 * Hint:  Make use of closures and “private” variables.
 */

(function(){
    /**
     * @description fibonacci method
     * @access private
     * @returns {function} calculate 
     * @example
     * fibonacci() -> returns next fib number
     * fibonacci(true) -> resets the series and returns 1
     */
    const fibonacci = (function () {
        // sequence is a private variable which will be used in calculate closure 
        let sequence = [0, 1];

        /**
         * @description calculate fib number
         * @params {boolean} reset flag - if true series will be reset
         * @returns {number} next fib number
         */
        return function calculate (reset) {
            // calculate closure which still has the access to sequence private variable
            if(reset){
                sequence = [0, 1];
            }
    
            sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
    
            return sequence[sequence.length - 2];
            
        };
    }());

    const next = document.querySelector("#fib-next");
    const reset = document.querySelector("#fib-reset");

    function bindItems(fib, flag){
        const inlineEl = document.querySelector(".fib-number");

        inlineEl.innerText = 'fibonacci('.concat( !flag ? 'true' : '', ') => ', fib);
    }

    next.addEventListener('click', function(){
        bindItems(fibonacci(), true);

    });
    reset.addEventListener('click', function(){
        bindItems(fibonacci(true), false);
    });

}());