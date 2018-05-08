export function strengthToTitle(strength) {
  switch (strength) {
    case 0: {
      return '无'
    }
    case 1: {
      return '差'
    }
    case 2: {
      return '一般'
    }
    case 3: {
      return '中'
    }
    case 4: {
      return '良好'
    }
    case 5: {
      return '强'
    }
  }
}
