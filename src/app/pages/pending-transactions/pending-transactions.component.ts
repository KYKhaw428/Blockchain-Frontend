import { Component, OnInit } from '@angular/core';
import { BlockchainService } from 'src/app/services/blockchain.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pending-transactions',
  templateUrl: './pending-transactions.component.html',
  styleUrls: ['./pending-transactions.component.scss']
})
export class PendingTransactionsComponent implements OnInit {

  public pendingTransactions = [];

  constructor(private blockchainService: BlockchainService, private router: Router, private route: ActivatedRoute) {
    this.pendingTransactions = blockchainService.getPendingTransactions();
   }

  ngOnInit() {
  }

  minePendingTransactions(){
    this.blockchainService.minePendingTransactions();
    this.router.navigate(['/']);
  }
}
