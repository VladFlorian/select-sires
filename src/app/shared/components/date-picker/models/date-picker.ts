export const datePickerObj  = {
    inputDate: new Date(), // default new Date()
    fromDate: null, // default null
    toDate: null, // default null
    showTodayButton: false, // default true
    closeOnSelect: false, // default false
    disableWeekDays: [], // default []
    mondayFirst: false, // default false
    setLabel: 'Set',  // default 'Set'
    todayLabel: null, // default 'Today'
    closeLabel: 'Close', // default 'Close'
    disabledDates: [], // default []
    titleLabel: null,//'Select a Date', // default null
    monthsList: ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"],
    weeksList: ["S", "M", "T", "W", "T", "F", "S"],
    dateFormat: 'YYYY-MM-DD', // default DD MMM YYYY
    clearButton: false, // default true
    momentLocale: 'en-US', // Default 'en-US'
    yearInAscending: false, // Default false
    btnCloseSetInReverse: false, // Default false
    btnProperties: {
        expand: 'block', // Default 'block'
        fill: '', // Default 'solid'
        size: '', // Default 'default'
        disabled: '', // Default false
        strong: '', // Default false
        color: '' // Default ''
    },
    arrowNextPrev: {
        // nextArrowSrc: 'assets/svg/arrow_right.svg',
        // prevArrowSrc: 'assets/svg/arrow_left.svg'
    }, // This object supports only SVG files.
    highlightedDates: [
        // { date: new Date('2019-09-10'), color: '#ee88bf', fontColor: '#fff' },
        // { date: new Date('2019-09-12'), color: '#50f2b1', fontColor: '#fff' }
    ], // Default [],
  isSundayHighlighted: {
        // fontColor: null // Default null
    } // Default {}
};