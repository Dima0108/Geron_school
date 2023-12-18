// // Импорт как объект
// import * as testObject from "./src/scripts/test";

// // Обычный импорт
// import { testFunction } from "./src/scripts/test";

// // Импорт при экспорте по умолчанию
// import testFunction from "./src/scripts/test";

const office = {
    tech: {
        employersCount: 10,
        jobsCount: 5
    },
    design: {
        employersCount: 10,
        jobsCount: 5
    }
}

let sumOfWorks = 0;
Object.entries(office).forEach(([keys, values]) => {
    sumOfWorks += values.jobsCount
})
