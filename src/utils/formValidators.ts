export const formValidators = {
    emailValidator: {
        required: {
            value: true,
            message: 'Обязательное поле'
        },
        pattern: {
            value:/^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@([a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$/,
            message: 'Неверный формат почты'
        }
    },
    passwordValidator: {
            required: {
                value: true, 
                message: 'Пароль обязателен'
            },
            minLength: {
                value: 8,
                message:'Пароль должен быть  не короче 8 символов'
            }
    
        }
    
    
}