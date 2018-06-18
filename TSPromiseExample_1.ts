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

    //Promise Chaining for concurrent step-wise computation
    Promise.all([
        performUpload('uploading...'),
        performUpload('compressing...'),        
    ]).then(values => {
        Promise.all([
            performUpload('transferring...')
        ]).then(values => {
            Promise.all([
                performUpload('completed')
            ]).then(values => {
                console.log(values);
            })
        });
    });
}