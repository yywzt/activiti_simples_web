const rewire = require("rewire")
const bs_raw_files_generator = rewire("./bs-raw-files-generator")
const getFiles = bs_raw_files_generator.__get__("getFiles")
// @ponicode
describe("getFiles", () => {
    test("0", () => {
        let callFunction = () => {
            getFiles("less")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            getFiles(1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            getFiles("fonts")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            getFiles(0.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            getFiles(-10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            getFiles(NaN)
        }
    
        expect(callFunction).not.toThrow()
    })
})
