//noinspection BadExpressionStatementJS
/**
 * Created by ying.wu on 2017/6/12.
 */
// export {FunPointError, FunPointMissingOption, FunPointInvalidMode, FunPointInvalidParam, FunPointInvoiceRuleViolate};

class FunPointErrorDefinition extends Error{}
class FunPointError extends FunPointErrorDefinition{}
class FunPointMissingOption extends FunPointErrorDefinition{}
class FunPointInvalidMode extends FunPointErrorDefinition{}
class FunPointInvalidParam extends FunPointErrorDefinition{}
class FunPointInvoiceRuleViolate extends FunPointErrorDefinition{}

module.exports = {
    FunPointErrorDefinition: FunPointErrorDefinition,
    FunPointError: FunPointError,
    FunPointMissingOption: FunPointMissingOption,
    FunPointInvalidMode: FunPointInvalidMode,
    FunPointInvalidParam: FunPointInvalidParam,
    FunPointInvoiceRuleViolate: FunPointInvoiceRuleViolate
};