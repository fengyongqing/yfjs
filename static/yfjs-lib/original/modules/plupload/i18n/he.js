(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['plupload'], factory);
    } else if(typeof exports === 'object' && typeof module !== 'undefined') {
        var plupload;
        try {
            plupload = require('plupload');
        } catch (err) {
            plupload = root.plupload;
        }
        if (!plupload) throw new Error('plupload dependency not found');
        module.exports = factory(plupload);
    } else {
        if (!root.plupload) throw new Error('plupload dependency not found');
        factory(root.plupload);
    }
}(this, function(plupload) {

// Hebrew (he)
    plupload.addI18n({
        "Stop Upload": "בטל העלאה",
        "Upload URL might be wrong or doesn't exist.": "כתובת URL שגויה או לא קיימת.",
        "tb": "tb",
        "Size": "גודל",
        "Close": "סגור",
        "Init error.": "שגיאת איתחול",
        "Add files to the upload queue and click the start button.": "הוסף קבצים לרשימה ולחץ על כפתור שליחה להתחלת פעולות העלאה",
        "Filename": "שם קובץ",
        "Image format either wrong or not supported.": "תמונה פגומה או סוג תמונה לא נתמך",
        "Status": "אחוז",
        "HTTP Error.": "שגיאת פרוטוקול",
        "Start Upload": "שליחה",
        "mb": "MB",
        "kb": "KB",
        "Duplicate file error.": "קובץ כפול",
        "File size error.": "גודל קובץ חורג מהמותר",
        "N/A": "שגיאה",
        "gb": "GB",
        "Error: Invalid file extension:": "שגיאה: סוג קובץ לא נתמך:",
        "Select files": "בחר קבצים",
        "%s already present in the queue.": "%sקובץ נמצא כבר ברשימת הקבצים.",
        "File: %s": "קובץ: %s",
        "b": "B",
        "Uploaded %d/%d files": "מעלה: %d/%d",
        "Upload element accepts only %d file(s) at a time. Extra files were stripped.": "אלמנטי ההעלאה מקבלים רק %d קובץ(ים) בפעם אחת. קבצים נוספים הוסרו.",
        "%d files queued": "%d קבצים נותרו",
        "File: %s, size: %d, max file size: %d": "קובץ: %s, גודל: %d, גודל מקסימלי: %d",
        "Drag files here.": "גרור קבצים לכאן",
        "Runtime ran out of available memory.": "שגיאת מחסור בזיכרון",
        "File count error.": "שגיאת מספר קבצים",
        "File extension error.": "קובץ זה לא נתמך",
        "Error: File too large:": "שגיאה: קובץ חורג מהגודל המותר:",
        "Add Files": "הוסף קבצים"
    });

}));