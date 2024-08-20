const justADataToTestEngine = {
    ok: true,
    notOk: false,
};

describe('First Test:', () => {
    test('is truthy', () => {
        expect(justADataToTestEngine.ok).toBeTruthy();
    });

    test('is falsy', () => {
        expect(justADataToTestEngine.notOk).toBeFalsy();
    });
});