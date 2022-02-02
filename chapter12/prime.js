function prime_num(number) {

    for (i = 2; i < number; i++) {
        if (number === 1 || number === 2) {
            console.log(number, "is NOT a PRIME number");

            break;
        }

        if (number % i === 0) {
            console.log(number, "is NOT a PRIME number");

            break;
        }

        if (i === (number - 1)) {
            console.log(number, "is a PRIME number");

            break;
        }

    }
}


prime_num(121);

prime_num(11);


