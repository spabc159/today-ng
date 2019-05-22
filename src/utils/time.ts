export const ONE_HOUR = 60 * 60 * 1000;
export const ONE_DAY = 24 * ONE_HOUR;

// tslint:disable-next-line:only-arrow-functions
export const getCurrentTime = function (): number {
    return new Date().getTime();
};

// tslint:disable-next-line:only-arrow-functions
export const getTodayTime = function (): number {
    return floorToDate(new Date());
};

// tslint:disable-next-line:only-arrow-functions
export const floorToDate = function (time: any): number {
    const t = new Date(time);
    t.setHours(0, 0, 0, 0);
    return t.getTime();
};

// tslint:disable-next-line:only-arrow-functions
export const floorToMinute = function (time: any): number {
    const t = new Date(time);
    t.setSeconds(0, 0);
    return t.getTime();
};

// tslint:disable-next-line:only-arrow-functions
export const lessThanADay = function (
    later: number,
    earlier: number = getCurrentTime()
) {
    return later - earlier < ONE_DAY;
};
