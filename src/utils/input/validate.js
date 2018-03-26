const validate = values => {
    const errors = {};
    if (!values.title) {
        errors.title = "Required";
    }
    if (!values.question || !values.question.length) {
        errors.question = "Required";
    }

    if (!values.answer || !values.answer.length) {
        errors.answer = "Required";
    }

    if (!values.opts || !values.opts.length) {
        errors.opts = {_error: "At least one opt must be entered"};
    }
    if (values && values.opts && values.opts.length) {
        const optArrayErrors = [];
        const optErrors = {}
        values.opts.forEach((opt, optIndex) => {
            if (!opt || !opt.length) {
                optArrayErrors[optIndex] = "Required";
            }
        });

        if (optArrayErrors.length) {
            optErrors.opts = optArrayErrors;
            optArrayErrors[values.opts.length] = optErrors;
        }

        if (values.opts.length > 4) {
            if (!optErrors.opts) {
                optErrors.opts = [];
            }

            // 먹혔는데 바닥에서 멘트가 나와서 의미가 없어 5번째 옵션에떠야해 *submit 눌러야 나옴
            // errors.opts = { _error: "No more than four opts allowed"};
            //optArrayErrors[opt] = "No more than four opts allowed"; 얘는 글을 다써야 5번쨰에서 뜸

            optErrors.opts._error = "No more than four opts allowed";
            optArrayErrors[values.opts.length] = optErrors;
        }


        if (optArrayErrors.length) {
            errors.opts = optArrayErrors;
        }
    }


            return errors;
        }


export default validate;
