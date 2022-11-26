interface ValueObjectProps {
    [index: string]: any;
  }

abstract class ValueObject<T extends ValueObjectProps> {
    protected readonly props: T;
  
    protected constructor(props: T) {
      this.props = Object.freeze(props);
    }

    equals(vo: ValueObject<T>): boolean {
        if (vo === null) {
            return false;
        }
        if (this.constructor.name !== vo.constructor.name) {
            return false;
        }
        if (typeof vo.props !== "object" || vo.props === null) {
            return false;
        }
        return this.props === vo.props;
    }
}

export default ValueObject;