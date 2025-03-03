export const verifyKeyAttributes = (e) => {
    if (e.key !== "ArrowUp" && e.key !== "ArrowDown" && e.key !== "Backspace") {
        e.preventDefault();
    }
};

export const attributesValuesChange = (e, object) => {
    const { name, value } = e.target;
    const newValue = Math.max(0, Math.min(100, Number(value)));

    if (Number(e.target.value) - 1 < 0) {
        e.target.value = 0;

        object((prevSheet) => ({
            ...prevSheet,
            attributes: {
                ...prevSheet.attributes,
                [name]: newValue,
            },
        }));
        return false;
    } else if (Number(e.target.value) + 1 > 100) {
        e.target.value = 100;

        object((prevSheet) => ({
            ...prevSheet,
            attributes: {
                ...prevSheet.attributes,
                [name]: newValue,
            },
        }));
        return false;
    }

    object((prevSheet) => ({
        ...prevSheet,
        attributes: {
            ...prevSheet.attributes,
            [name]: newValue,
        },
    }));
};
