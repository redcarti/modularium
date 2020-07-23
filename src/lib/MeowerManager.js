class MeowerManager {
    constructor(version, newerVer) {
        this.version = version
        this.newerVer = newerVer
    }

    isNeeded() {
        console.log(/^$/.exec(this.version))
    }
}