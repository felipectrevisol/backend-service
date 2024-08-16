//#TODO Estuar este casso.
(() => {
    process.on('uncaughtException', (error) => {
        //#TODO adicionar o Sentry aqui: por exemplo.
        console.log("Houve um erro inesperado!");
    });
});