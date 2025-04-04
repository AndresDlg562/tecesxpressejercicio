import FakeDBService from "./fake/service";


class DBFactory {
    static create() {
        return new FakeDBService();
    }
}

export default DBFactory;