"use strict";

namespace TSPromiseExample_1 {
    const performUpload = function(imgStatus: string) : Promise<{imgStatus : string, len: number}> {
        return new Promise((resolve) => {
            console.log(`Status: ${imgStatus}`);
            setTimeout(() => {
                resolve({imgStatus: imgStatus, len: imgStatus.length});
            }, 5000);
        });
    }

    var upload, compress, transfer;

    Promise.all([
        performUpload('uploading...'),
        performUpload('compressing...'),
        performUpload('transferring...'),
        performUpload('completed')
    ]).then(values => {
        console.log(values);
    });
}