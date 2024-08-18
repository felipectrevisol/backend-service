function catchUnExpectedError() {
    process.on('uncaughtException', (error) => {
        //#TODO adicionar o Sentry aqui: por exemplo.
        console.log(`
            Houve um erro inesperado!\n
            Message: ${error.message}\n
            Cause: ${error.cause}\n
            Code: ${error.code}\n
            String Error: ${error.toString()}
        `);
        process.abort();
    });
}

export default catchUnExpectedError;