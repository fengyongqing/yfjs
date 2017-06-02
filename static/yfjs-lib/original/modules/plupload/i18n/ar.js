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

// Arabic (ar)
    plupload.addI18n({
        "Stop Upload": "أيقاف التحميل",
        "Upload URL might be wrong or doesn't exist.": "عنوان التحميل ربما يكون خاطئ أو  غير متوفر",
        "tb": "تيرابايت",
        "Size": "الحجم",
        "Close": "أغلاق",
        "Init error.": "خطأ في تهيئة",
        "Add files to the upload queue and click the start button.": "أضف ملفات إلى القائمة إنتظار التحميل ثم أضغط على زر البداية",
        "Filename": "أسم الملف",
        "Image format either wrong or not supported.": "صيغة الصورة أما خطاء أو غير مدعومه",
        "Status": "الحالة",
        "HTTP Error.": "خطأ في  برتوكول نقل الملفات",
        "Start Upload": "أبدا التحميل",
        "mb": "ميجابايت",
        "kb": "كيلوبايت",
        "Duplicate file error.": "خطاء في تكرار الملف",
        "File size error.": "خطأ في حجم الملف",
        "N/A": "لا شي",
        "gb": "جيجابايت",
        "Error: Invalid file extension:": "خطاء : أمتداد الملف غير صالح :",
        "Select files": "أختر الملفات",
        "%s already present in the queue.": "%s الملف موجود بالفعل في قائمة الانتظار",
        "File: %s": "ملف: %s",
        "b": "بايت",
        "Uploaded %d/%d files": "تحميل %d/%d ملف",
        "Upload element accepts only %d file(s) at a time. Extra files were stripped.": "العناصر المقبوله لتحميل هي %d ملف في هذا الوقت. الملفات الاضافية أزيلة.",
        "%d files queued": "%d الملفات في قائمة الانتظار",
        "File: %s, size: %d, max file size: %d": "ملف: %s, أقصى حجم للملف: %d, حجم: %d",
        "Drag files here.": "سحب الملف هنا",
        "Runtime ran out of available memory.": "الذاكرة المتوفره أنتهت لمدة التشغيل",
        "File count error.": "خطاء في عد الملفات",
        "File extension error.": "خطأ في أمتداد الملف",
        "Error: File too large:": " خطاء : حجم الملف كبير :",
        "Add Files": "أضف ملفات"
    });

}));