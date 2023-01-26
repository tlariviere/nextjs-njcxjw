interface File {
  type: "file";
  name: string;
}

interface Directory {
  type: "directory";
  name: string;
  children: (File | Directory)[];
}

const isFile = (item: File | Directory): item is File => item.type === "file";

/**
 * Traverse files & directories.
 *
 * Return a list of every files filtered by given function.
 */
export const visitFiles = (
  root: Directory,
  filterFn: (file: File) => boolean
): File[] =>
  root.children.reduce((files, child) => {
    if (isFile(child)) {
      return filterFn(child) ? files.concat(child) : files;
    }

    return [...files, ...visitFiles(child, filterFn)];
  }, []);

// Use example
const root: Directory = {
  type: "directory",
  name: "/",
  children: [
    {
      type: "file",
      name: "abcba",
    },
    {
      type: "file",
      name: "foo",
    },
    {
      type: "directory",
      name: "bar",
      children: [],
    },
    {
      type: "directory",
      name: "baz",
      children: [
        {
          type: "file",
          name: "bcdcb",
        },
        {
          type: "file",
          name: "foo",
        },
      ],
    },
    {
      type: "directory",
      name: "beef",
      children: [
        {
          type: "directory",
          name: "foo",
          children: [
            {
              type: "file",
              name: "cdedc",
            },
          ],
        },
      ],
    },
  ],
};

const filteredFiles = visitFiles(root, (file) => {
  const name = file.name;

  for (let i = 0; i < Math.floor(name.length) / 2; i++) {
    if (name[i] != name[name.length - 1 - i]) {
      return false;
    }
  }
  return true;
});
