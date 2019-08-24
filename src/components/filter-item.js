export const getFilterItemLayout = (filter) => {
  return `<input
      type="radio"
      id="filter__${filter.title}"
      class="filter__input visually-hidden"
      name="filter"
      ${filter.title === `all` ? `checked` : `disabled`}
    />
    <label for="filter__all" class="filter__label">
      ${filter.title} <span class="filter__all-count">${filter.count}</span></label>`;
};

const todayDate = new Date(Date.now()).toDateString();

export const getFilterCountMap = (tasks) => {
  const filtersCountMap = {
    all: tasks.length,
    overdue: 0,
    today: 0,
    favorites: 0,
    repeating: 0,
    tags: 0,
    archive: 0,
  };

  tasks.forEach(({dueDate, repeatingDays, tags, isFavorite, isArchive}) => {
    if (new Date(dueDate).toDateString() === todayDate) {
      filtersCountMap.today++;
    }
    if (Date.parse(new Date(Date.now()).toDateString()) > dueDate) {
      filtersCountMap.overdue++;
    }
    if (Object.keys(repeatingDays).some((day) => repeatingDays[day])) {
      filtersCountMap.repeating++;
    }
    if (isFavorite) {
      filtersCountMap.favorites++;
    }
    if (isArchive) {
      filtersCountMap.archive++;
    }
    if (tags.size > 0) {
      filtersCountMap.tags++;
    }
  });
  return filtersCountMap;
};

export const getFilters = ({all, overdue, today, favorites, repeating, tags, archive}) =>
  [
    {
      title: `all`,
      count: all
    },
    {
      title: `overdue`,
      count: overdue,
    },
    {
      title: `today`,
      count: today,
    },
    {
      title: `favorites`,
      count: favorites,
    },
    {
      title: `repeating`,
      count: repeating,
    },
    {
      title: `tags`,
      count: tags,
    },
    {
      title: `archive`,
      count: archive,
    },
  ];
