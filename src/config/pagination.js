export function pageDefine(list, divider) {
    return {
      currentPage: 1, 
      list: list, 
      divider: divider,
      pages: Math.ceil(list/divider)
    };
  }

export function pagination(props , page) {
    const pageRangeA = ((page.currentPage - 1) * page.divider)
    const pageRangeB = (page.currentPage * page.divider)
    props.links = props.links.filter((item, index) => index >= pageRangeA && index <= pageRangeB)

    return props;
}