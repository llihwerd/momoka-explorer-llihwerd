import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';
import type { FC } from 'react';
import { useState } from 'react';

import type { DataAvailabilityTransactionUnion } from '@/generated';
import { useAppPersistStore } from '@/store/app';
import isDataVerified from '@/utils/isDataVerified';

import { Button } from '../ui/Button';
import { Input } from '../ui/Input';

interface VerifyProps {
  dataAvailabilityTransaction: DataAvailabilityTransactionUnion;
}

const Verify: FC<VerifyProps> = ({ dataAvailabilityTransaction }) => {
  const selectedEnvironment = useAppPersistStore((state) => state.selectedEnvironment);
  const [nodeUrl, setNodeUrl] = useState<string>(
    selectedEnvironment.id === 'mainnet'
      ? 'https://rpc.ankr.com/polygon'
      : 'https://rpc.ankr.com/polygon_mumbai'
  );
  const [status, setStatus] = useState<'UNKNOWN' | 'VERIFIED' | 'NOT_VERIFIED'>('UNKNOWN');
  const [message, setMessage] = useState<any>();

  return (
    <div className="w-full">
      <div className="space-y-3">
        <div>
          <Input
            label="You can use your own node by replacing the below, it must be an archive node"
            placeholder="Public RPC node"
            type="text"
            value={nodeUrl}
            onChange={(e) => setNodeUrl(e.target.value)}
          />
        </div>
        <Button
          type="button"
          disabled={!nodeUrl}
          onClick={() => {
            isDataVerified(dataAvailabilityTransaction.transactionId, nodeUrl, selectedEnvironment.id).then(
              ({ verified, message }) => {
                setStatus(verified ? 'VERIFIED' : 'NOT_VERIFIED');
                setMessage(message);
              }
            );
          }}
        >
          Verify
        </Button>
      </div>
      {status === 'UNKNOWN' ? null : status === 'VERIFIED' ? (
        <div className="mt-5 flex items-center space-x-2 font-bold text-green-500">
          <CheckCircleIcon className="h-5 w-5" />
          <span>Verified</span>
        </div>
      ) : (
        <div className="mt-5 flex items-center space-x-2 font-bold text-yellow-500">
          <XCircleIcon className="h-5 w-5" />
          <span>Not verified</span>
        </div>
      )}
      {status === 'NOT_VERIFIED' && message ? (
        <div className="mt-5">
          <b>Message: </b>
          <span>{JSON.stringify(message)}</span>
        </div>
      ) : null}
    </div>
  );
};

export default Verify;
