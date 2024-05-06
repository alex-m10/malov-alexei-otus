class PrintTree {
    static verticalStick = [];

    print(data, level = 0, last = false, offset = '') {
        PrintTree.verticalStick[level] = last;
        const padding = level ? '─ ' : '';
        const node = level > 0 ? (last ? '└' : '├') : '';
        if (level > 1) offset += PrintTree.verticalStick[level - 1] ? '   ' : '│  ';

        console.log(`${offset}${node}${padding}${data.name}`);

        // Если у узла есть дочерние элементы, рекурсивно вызываем функцию для каждого из них
        if (data.items && data.items.length > 0) {
            data.items.forEach((item, index) => {
                this.print(item, level + 1, index === data.items.length - 1, offset);
            });
        }
    }
}

// Пример использования
const treeData = {
    name: 1,
    items: [
        {
            name: 2,
            items: [
                { name: 3 },
                { name: 4 }
            ]
        },
        {
            name: 5,
            items: [
                { name: 6 },
                {
                    name: 67,
                    items: [
                        {
                            name: 677,
                            items: [{ name: 6778 }]
                        },
                        { name: 678 },
                    ]
                },
                { name: 68 },
            ]
        },
        {
            name: 7,
            items: [{ name: 8 }]
        }

    ]
};

const printer = new PrintTree();
printer.print(treeData);
