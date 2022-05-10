export const numberFormat = (value) => {
    return new Intl.NumberFormat('en-IN', {
        currency: 'INR',
        maximumSignificantDigits: 3
    }).format(value);
}